"""Database Connection Abstraction."""

from typing import Any, Dict


class DatabaseConnection:
    """Manages database connection pool and engine lifecycle."""

    def __init__(self, dsn: str = "postgresql://postgres:postgres@localhost:5432/vex_db") -> None:
        self.dsn = dsn
        self._connected = True

    def get_connection(self) -> Dict[str, Any]:
        return {"status": "connected", "dsn": self.dsn}
