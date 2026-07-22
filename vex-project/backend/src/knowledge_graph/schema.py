"""Knowledge Graph Ontology Schema — canonical node and edge definitions."""

from enum import Enum


class CanonicalNodeType(str, Enum):
    EQUIPMENT = "equipment"
    DOCUMENT = "document"
    ENGINEER = "engineer"
    VENDOR = "vendor"
    INCIDENT = "incident"
    MAINTENANCE = "maintenance"
    SOP = "sop"
    SENSOR = "sensor"
    PROCESS = "process"
    LOCATION = "location"
    DEPARTMENT = "department"


class CanonicalEdgeType(str, Enum):
    OWNED_BY = "OWNED_BY"
    DEPENDS_ON = "DEPENDS_ON"
    LOCATED_IN = "LOCATED_IN"
    SERVICED_BY = "SERVICED_BY"
    REFERENCES = "REFERENCES"
    CAUSED_BY = "CAUSED_BY"
    RESOLVED_BY = "RESOLVED_BY"
    MAINTAINED_BY = "MAINTAINED_BY"
    MONITORED_BY = "MONITORED_BY"
    DERIVED_FROM = "DERIVED_FROM"
    PART_OF = "PART_OF"
    EXHIBITS_FAILURE = "EXHIBITS_FAILURE"
