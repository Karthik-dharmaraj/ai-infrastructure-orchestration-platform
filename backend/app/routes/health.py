from fastapi import APIRouter
from app.kubernetes_client import core_v1

router = APIRouter()

@router.get("/health")
def cluster_health():

    nodes = core_v1.list_node().items

    total_nodes = len(nodes)

    ready_nodes = 0

    for node in nodes:
        for condition in node.status.conditions:
            if condition.type == "Ready" and condition.status == "True":
                ready_nodes += 1

    return {
        "cluster_status": "healthy",
        "total_nodes": total_nodes,
        "ready_nodes": ready_nodes
    }