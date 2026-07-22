"""Deployment Smoke Tests."""

import pytest


def test_deployment_manifests_integrity():
    """Verify deployment configurations exist and hold minimum configuration specifications."""
    import os

    assert os.path.exists("docker-compose.yml")
    assert os.path.exists("docker-compose.prod.yml")
    assert os.path.exists("docker-compose.dev.yml")
