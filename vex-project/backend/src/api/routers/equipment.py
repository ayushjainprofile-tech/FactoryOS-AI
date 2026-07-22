"""Equipment API Router (GET /equipment)."""

from typing import Optional
from fastapi import APIRouter, Depends, Query, status
from src.api.schemas.equipment import EquipmentListResponse
from src.middleware.authorization import require_permission
from src.security.jwt import TokenClaims
from src.security.permissions import EQUIPMENT_READ
from src.services.equipment_service import EquipmentService

router = APIRouter(prefix="/equipment", tags=["Equipment Master Registry"])

_eq_service = EquipmentService()


@router.get("", response_model=EquipmentListResponse, status_code=status.HTTP_200_OK)
async def get_equipment(
    plant_id: Optional[str] = Query(None, description="Filter by plant ID"),
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    claims: TokenClaims = Depends(require_permission(EQUIPMENT_READ)),
    eq_service: EquipmentService = Depends(lambda: _eq_service),
) -> EquipmentListResponse:
    """Lists equipment within tenant scope, supporting plant filtering and pagination."""
    return await eq_service.list_equipment(tenant_id=claims.tenant_id, plant_id=plant_id, page=page, page_size=page_size)
