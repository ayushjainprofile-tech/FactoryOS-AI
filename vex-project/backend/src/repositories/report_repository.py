"""Report Repository."""

from typing import Dict, List, Optional
from src.models.report import ReportModel


class ReportRepository:
    """Repository managing generated analysis reports."""

    def __init__(self) -> None:
        self._store: Dict[str, ReportModel] = {}

    async def save(self, report: ReportModel) -> ReportModel:
        key = f"{report.tenant_id}:{report.id}"
        self._store[key] = report
        return report

    async def get_by_id(self, tenant_id: str, report_id: str) -> Optional[ReportModel]:
        key = f"{tenant_id}:{report_id}"
        return self._store.get(key)
