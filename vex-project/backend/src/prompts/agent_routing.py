"""Agent Routing Prompt Template."""

AGENT_ROUTING_PROMPT_V1 = """
Map detected intent '{detected_intent}' (confidence: {confidence}) to the optimal Industrial Agent.

Mapping Rules:
- 'investigation' -> InvestigationAgent
- 'report' -> ReportAgent
- 'compliance' -> ComplianceAgent
- 'knowledge' -> KnowledgeAgent
- 'chat' -> ChatAgent (Default fallback if confidence < 0.60)
"""
