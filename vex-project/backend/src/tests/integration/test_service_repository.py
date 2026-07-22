"""Integration Tests — Service to Repository flow."""

import pytest
from src.models.user import UserModel
from src.repositories.user_repository import UserRepository


@pytest.mark.integration
@pytest.mark.asyncio
async def test_integration_user_repository_flow():
    repo = UserRepository()
    user = UserModel(id="u100", tenant_id="t_integ", email="user@integ.com", username="u_integ")

    await repo.create_user(user)
    fetched = await repo.get_by_email("t_integ", "user@integ.com")
    assert fetched is not None
    assert fetched.username == "u_integ"
