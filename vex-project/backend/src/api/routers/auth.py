"""Thin Auth Router handling HTTP endpoints for login, token refresh, and profile retrieval."""

from fastapi import APIRouter, Depends, status
from src.api.schemas.auth import LoginRequest, RefreshTokenRequest, TokenResponse, UserProfileResponse
from src.middleware.authorization import get_current_user_claims
from src.repositories.user_repository import UserRepository
from src.security.jwt import TokenClaims, revoke_token
from src.services.auth_service import AuthService

router = APIRouter(prefix="/auth", tags=["Authentication"])

# Global UserRepository instance for DI
_user_repo = UserRepository()
_auth_service = AuthService(_user_repo)


def get_auth_service() -> AuthService:
    return _auth_service


@router.post("/login", response_model=TokenResponse, status_code=status.HTTP_200_OK)
async def login(
    request: LoginRequest,
    auth_service: AuthService = Depends(get_auth_service),
) -> TokenResponse:
    """Authenticates user and returns JWT access and refresh token pair."""
    _, token_response = await auth_service.authenticate_user(request)
    return token_response


@router.post("/refresh", response_model=TokenResponse, status_code=status.HTTP_200_OK)
async def refresh_tokens(
    request: RefreshTokenRequest,
    auth_service: AuthService = Depends(get_auth_service),
) -> TokenResponse:
    """Rotates refresh token and returns new JWT access and refresh token pair."""
    return await auth_service.refresh_tokens(request.refresh_token)


@router.post("/logout", status_code=status.HTTP_204_NO_CONTENT)
async def logout(claims: TokenClaims = Depends(get_current_user_claims)) -> None:
    """Invalidates active token by adding jti to blacklist."""
    revoke_token(claims.jti)


@router.get("/me", response_model=UserProfileResponse, status_code=status.HTTP_200_OK)
async def get_current_user_profile(
    claims: TokenClaims = Depends(get_current_user_claims),
    user_repo: UserRepository = Depends(lambda: _user_repo),
) -> UserProfileResponse:
    """Returns profile for currently authenticated user within their tenant scope."""
    user = await user_repo.get_by_id(claims.sub, tenant_id=claims.tenant_id)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User profile not found.")
    return UserProfileResponse(
        id=user.id,
        tenant_id=user.tenant_id,
        plant_id=user.plant_id,
        department_id=user.department_id,
        email=user.email,
        username=user.username,
        first_name=user.first_name,
        last_name=user.last_name,
        roles=user.roles,
        is_active=user.is_active,
    )
