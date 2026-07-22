"""Knowledge Graph API Router."""

from fastapi import APIRouter, Depends, status
from src.api.schemas.knowledge_graph import CreateEdgeRequest, CreateNodeRequest, GraphQueryResponse
from src.middleware.authorization import require_permission
from src.security.jwt import TokenClaims
from src.security.permissions import KNOWLEDGE_READ
from src.services.knowledge_graph_service import KnowledgeGraphService

router = APIRouter(prefix="/knowledge-graph", tags=["Knowledge Graph"])
_kg_service = KnowledgeGraphService()


@router.post("/nodes", status_code=status.HTTP_201_CREATED)
async def create_node(
    req: CreateNodeRequest,
    claims: TokenClaims = Depends(require_permission(KNOWLEDGE_READ)),
    kg_service: KnowledgeGraphService = Depends(lambda: _kg_service),
):
    """Creates a new knowledge graph node under tenant scope."""
    return await kg_service.add_entity(
        node_id=req.node_id,
        name=req.name,
        entity_type=req.entity_type,
        tenant_id=claims.tenant_id,
        plant_id=req.plant_id,
        department_id=req.department_id,
        properties=req.properties,
    )


@router.post("/edges", status_code=status.HTTP_201_CREATED)
async def create_edge(
    req: CreateEdgeRequest,
    claims: TokenClaims = Depends(require_permission(KNOWLEDGE_READ)),
    kg_service: KnowledgeGraphService = Depends(lambda: _kg_service),
):
    """Creates a new directed knowledge graph edge under tenant scope."""
    return await kg_service.add_relation(
        edge_id=req.edge_id,
        source_id=req.source_id,
        target_id=req.target_id,
        relation_type=req.relation_type,
        tenant_id=claims.tenant_id,
        confidence=req.confidence,
        properties=req.properties,
    )


@router.get("/subgraph/{node_id}", response_model=GraphQueryResponse)
async def query_subgraph(
    node_id: str,
    depth: int = 2,
    claims: TokenClaims = Depends(require_permission(KNOWLEDGE_READ)),
    kg_service: KnowledgeGraphService = Depends(lambda: _kg_service),
) -> GraphQueryResponse:
    """Queries multi-hop graph neighborhood surrounding specified node ID."""
    res = await kg_service.query_subgraph(tenant_id=claims.tenant_id, node_id=node_id, depth=depth)
    return GraphQueryResponse(nodes=[n.model_dump() for n in res.get("nodes", [])], edges=[e.model_dump() for e in res.get("edges", [])])
