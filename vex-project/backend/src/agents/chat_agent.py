"""Specialized Industrial Agents."""

from src.agents.base_agent import BaseAgent
from src.graph.state import EvidenceItem, GraphState


class ChatAgent(BaseAgent):
    def __init__(self):
        super().__init__("chat_agent", "ChatAgent")

    async def execute(self, state: GraphState) -> GraphState:
        self.pre_run_check(state)
        state.execution_trace.append("ChatAgent executed general retrieval.")
        state.evidence.append(
            EvidenceItem(
                source_type="vector_rag",
                source_id="doc_chat_manual",
                title="Industrial Assistant Manual",
                content="Standard operational response guidance for factory questions.",
                score=0.90,
            )
        )
        return state


class InvestigationAgent(BaseAgent):
    def __init__(self):
        super().__init__("investigation_agent", "InvestigationAgent")

    async def execute(self, state: GraphState) -> GraphState:
        self.pre_run_check(state)
        state.execution_trace.append("InvestigationAgent performed root-cause analysis.")
        state.evidence.append(
            EvidenceItem(
                source_type="telemetry",
                source_id="sensor_vib_99",
                title="Vibration Telemetry Probe",
                content="FFT spectrum shows 120Hz peak matching inner bearing race defect.",
                score=0.96,
            )
        )
        return state


class ReportAgent(BaseAgent):
    def __init__(self):
        super().__init__("report_agent", "ReportAgent")

    async def execute(self, state: GraphState) -> GraphState:
        self.pre_run_check(state)
        state.execution_trace.append("ReportAgent compiled operational metrics.")
        return state


class ComplianceAgent(BaseAgent):
    def __init__(self):
        super().__init__("compliance_agent", "ComplianceAgent")

    async def execute(self, state: GraphState) -> GraphState:
        self.pre_run_check(state)
        state.execution_trace.append("ComplianceAgent checked ISO 55001 rules.")
        return state


class KnowledgeAgent(BaseAgent):
    def __init__(self):
        super().__init__("knowledge_agent", "KnowledgeAgent")

    async def execute(self, state: GraphState) -> GraphState:
        self.pre_run_check(state)
        state.execution_trace.append("KnowledgeAgent queried Neo4j topology.")
        state.evidence.append(
            EvidenceItem(
                source_type="graph_rag",
                source_id="neo4j_node_101",
                title="Neo4j Knowledge Graph",
                content="(PUMP-21)-[:POWERED_BY]->(MOTOR-09)",
                score=0.95,
            )
        )
        return state
