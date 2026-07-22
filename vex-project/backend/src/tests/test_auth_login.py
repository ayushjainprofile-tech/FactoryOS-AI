"""Integration tests for authentication service login flow."""

import pytest
from src.api.schemas.auth import LoginRequest
from src.core.exceptions import UnauthorizedException
from src.models.user import User
from src.repositories.user_repository import UserRepository
from src.security.password import hash_password
from src.services.auth_service import AuthService


@pytest.mark.asyncio
async def test_successful_login():
    repo = UserRepository()
    user = User(
        id="u1",
        tenant_id="tenant_1",
        plant_id="plant_1",
        email="eng@factoryos.com",
        username="engineer1",
        password_hash=hash_password("Secret123!"),
        roles=["Engineer"],
    )
    await repo.save(user)

    auth_service = AuthService(repo)
    login_req = LoginRequest(identifier="eng@factoryos.com", password="Secret123!")
    auth_user, token_res = await auth_service.authenticate_user(login_req)

    assert auth_user.id == "u1"
    assert token_res.access_token is not None
    assert token_res.refresh_token is not None


@pytest.mark.asyncio
async def test_invalid_password():
    repo = UserRepository()
    user = User(
        id="u1",
        tenant_id="tenant_1",
        email="eng@factoryos.com",
        password_hash=hash_password("Secret123!"),
        roles=["Engineer"],
    )
    await repo.save(user)

    auth_service = AuthService(repo)
    login_req = LoginRequest(identifier="eng@factoryos.com", password="WrongPassword!")

    with pytest.raises(UnauthorizedException):
        await auth_service.authenticate_user(login_req)
