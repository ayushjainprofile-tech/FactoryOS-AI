"""Authentication API Schemas."""

from typing import List, Optional
from pydantic import BaseModel, EmailStr, Field


class LoginRequest(BaseModel):
    """Login request payload."""

    identifier: str = Field(..., description="Email or Username")
    password: str = Field(..., description="User password")
    tenant_id: Optional[str] = Field(None, description="Optional target tenant scope ID")


class TokenResponse(BaseModel):
    """Token response contract."""

    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    expires_in: int


class RefreshTokenRequest(BaseModel):
    """Refresh token request payload."""

    refresh_token: str


class UserProfileResponse(BaseModel):
    """Authenticated user profile contract."""

    id: str
    tenant_id: str
    plant_id: Optional[str] = None
    department_id: Optional[str] = None
    email: str
    username: str
    first_name: str
    last_name: str
    roles: List[str]
    is_active: bool
