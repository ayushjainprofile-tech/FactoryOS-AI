"""Database Session Management."""

from typing import AsyncGenerator
from src.database.connection import DatabaseConnection


class DatabaseSession:
    """Manages transactional database session context."""

    def __init__(self, conn: DatabaseConnection) -> None:
        self.conn = conn

    async def commit((self)) -> None:
        pass

    async def rollback(self) -> None:
        pass


async def get_db_session() -> AsyncGenerator[DatabaseSession, None]:
    conn = DatabaseConnection()
    session = DatabaseSession(conn)
    try:
        yield session
    finally:
        pass
