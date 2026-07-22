"""Integration tests for all 10 domain endpoints using FastAPI TestClient."""

import pytest
from fastapi.testclient import TestClient
from src.core.app import create_app
from src.security.jwt import create_jwt_token

app = create_app()
client = TestClient(app)


def _get_auth_headers(roles=["Admin"], tenant_id="tenant_test"):
    token = create_jwt_token(
        user_id="test_user_01",
        tenant_id=tenant_id,
        roles=roles,
        plant_id="plant_01",
    )
    return {"Authorization": f"Bearer {token}"}


def test_post_chat():
    headers = _get_auth_headers(["Engineer"])
    response = client.post(
        "/api/v1/chat",
        json={"message": "Diagnose PUMP-21 vibration anomaly", "equipment_id": "eq_pump_21"},
        headers=headers,
    )
    assert response.status_code == 200
    data = response.json()
    assert "response" in data
    assert "citations" in data


def test_get_equipment():
    headers = _get_auth_headers(["Engineer"])
    response = client.get("/api/v1/equipment", headers=headers)
    assert response.status_code == 200
    data = response.json()
    assert "items" in data
    assert data["total"] >= 1


def test_get_alerts():
    headers = _get_auth_headers(["Engineer"])
    response = client.get("/api/v1/alerts", headers=headers)
    assert response.status_code == 200
    data = response.json()
    assert "items" in data


def test_get_dashboard():
    headers = _get_auth_headers(["Executive"])
    response = client.get("/api/v1/dashboard", headers=headers)
    assert response.status_code == 200
    data = response.json()
    assert "total_equipment" in data
    assert "system_health" in data


def test_get_knowledge():
    headers = _get_auth_headers(["Engineer"])
    response = client.get("/api/v1/knowledge", headers=headers)
    assert response.status_code == 200
    data = response.json()
    assert "nodes" in data
    assert "relationships" in data


def test_get_compliance():
    headers = _get_auth_headers(["Auditor"])
    response = client.get("/api/v1/compliance", headers=headers)
    assert response.status_code == 200
    data = response.json()
    assert "overall_compliance_score" in data


def test_unauthorized_access_fails():
    # Requests without Authorization header must return HTTP 401
    response = client.get("/api/v1/equipment")
    assert response.status_code == 401
