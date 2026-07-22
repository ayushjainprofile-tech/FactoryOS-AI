"""Graph Query Planner — decomposes queries into entity seeds and multi-hop Cypher plans."""

import re
from typing import List
from pydantic import BaseModel, Field


class GraphQueryPlan(BaseModel):
    """Plan specifying entity seed terms and max traversal depth."""

    seed_entities: List[str] = Field(default_factory=list)
    max_depth: int = 2
    relation_filters: List[str] = Field(default_factory=list)


class GraphQueryPlanner:
    """Parses user query to identify seed entity tokens and graph traversal strategy."""

    def plan_query(self, query: str) -> GraphQueryPlan:
        # Extract potential equipment tag seeds (e.g. P-101, C-302, V-501)
        seeds = re.findall(r"\b([A-Z]{1,4}-\d{2,4}[A-Z]?)\b", query)
        if not seeds:
            words = [w for w in query.split() if len(w) > 3]
            seeds = words[:2]

        return GraphQueryPlan(seed_entities=seeds, max_depth=2)
