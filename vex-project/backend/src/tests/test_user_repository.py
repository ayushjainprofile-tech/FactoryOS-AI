"""Tests for User Repository."""

import pytest
from src.models.user import UserModel
from src.repositories.user_repository import UserRepository


@pytest.mark.asyncio
async def test_user_repository_crud():
    repo = UserRepository()
    user = UserModel(
        id="u1",
        tenant_id="t1",
        email="engineer@plant.com",
        username="engineer",
        full_name="Lead Engineer",
    )

    await repo.create_user(user)
    fetched = await repo.get_by_email("t1", "engineer@plant.com")
    assert fetched is not None
    assert fetched.username == "engineer"

    # Cross tenant check
    cross = await repo.get_by_email("t2", "engineer@plant.com")
    assert cross is None
