"""Investigation Service."""

import uuid
from datetime import datetime
from src.api.schemas.investigations import CreateInvestigationRequest, InvestigationResponse


class InvestigationService:
    async def create_investigation(self, request: CreateInvestigationRequest, tenant_id: str) -> InvestigationResponse:
        inv_id = str(uuid.uuid4())
        return InvestigationResponse(
            investigation_id=inv_id,
            equipment_id=request.equipment_id,
            title=request.title,
            status="analyzing",
            findings=[
                "Thermal anomaly detected on motor bearing",
                "Vibration frequency spike matches gear mesh frequency",
            ],
            created_at=datetime.utcnow().isoformat(),
        )
