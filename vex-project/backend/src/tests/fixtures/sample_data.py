"""Deterministic Test Fixtures."""

import pytest
from src.models.user import UserModel


@pytest.fixture
def sample_user() -> UserModel:
    return UserModel(
        id="user_test_01",
        tenant_id="tenant_test_01",
        email="test_user@plant.com",
        username="test_user",
        full_name="Test Operator",
    )
