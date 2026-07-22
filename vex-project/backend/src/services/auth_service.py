"""Authentication Service implementing domain login, token issuance, and SSO logic."""

from typing import Tuple
from src.api.schemas.auth import LoginRequest, TokenResponse, UserProfileResponse
from src.core.exceptions import BadRequestException, UnauthorizedException
from src.models.user import User
from src.repositories.user_repository import UserRepository
from src.security.jwt import create_jwt_token, decode_and_verify_jwt, revoke_token
from src.security.password import verify_password


class AuthService:
    """Service handling multi-tenant user authentication and session management."""

    def __init__(self, user_repo: UserRepository):
        self.user_repo = user_repo

    async def authenticate_user(self, request: LoginRequest) -> Tuple[User, TokenResponse]:
        """Validates credentials and returns User model along with signed JWT access/refresh tokens."""
        user = await self.user_repo.get_by_identifier(request.identifier, tenant_id=request.tenant_id)
        if not user or not user.is_active:
            raise UnauthorizedException("Invalid credentials or inactive account.")

        if not verify_password(request.password, user.password_hash):
            raise UnauthorizedException("Invalid credentials.")

        access_token = create_jwt_token(
            user_id=user.id,
            tenant_id=user.tenant_id,
            plant_id=user.plant_id,
            department_id=user.department_id,
            roles=user.roles,
            token_type="access",
        )

        refresh_token = create_jwt_token(
            user_id=user.id,
            tenant_id=user.tenant_id,
            plant_id=user.plant_id,
            department_id=user.department_id,
            roles=user.roles,
            token_type="refresh",
        )

        token_response = TokenResponse(
            access_token=access_token,
            refresh_token=refresh_token,
            token_type="bearer",
            expires_in=3600,
        )

        return user, token_response

    async def refresh_tokens(self, refresh_token_str: str) -> TokenResponse:
        """Rotates refresh token and issues new access token pair."""
        try:
            claims = decode_and_verify_jwt(refresh_token_str)
            if claims.token_type != "refresh":
                raise BadRequestException("Invalid token type for refresh.")

            # Revoke old refresh token (rotation)
            revoke_token(claims.jti)

            user = await self.user_repo.get_by_id(claims.sub, tenant_id=claims.tenant_id)
            if not user or not user.is_active:
                raise UnauthorizedException("User no longer active.")

            new_access = create_jwt_token(
                user_id=user.id,
                tenant_id=user.tenant_id,
                plant_id=user.plant_id,
                department_id=user.department_id,
                roles=user.roles,
                token_type="access",
            )
            new_refresh = create_jwt_token(
                user_id=user.id,
                tenant_id=user.tenant_id,
                plant_id=user.plant_id,
                department_id=user.department_id,
                roles=user.roles,
                token_type="refresh",
            )

            return TokenResponse(
                access_token=new_access,
                refresh_token=new_refresh,
                token_type="bearer",
                expires_in=3600,
            )
        except ValueError as err:
            raise UnauthorizedException(f"Invalid refresh token: {str(err)}") from err
