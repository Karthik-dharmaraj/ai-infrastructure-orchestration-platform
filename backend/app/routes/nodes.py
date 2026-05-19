from fastapi import APIRouter
from app.kubernetes_client import core_v1

router = APIRouter()

@router.get("/nodes")
def get_nodes():
    nodes = core_v1.list_node().items

    node_list = []

    for node in nodes:
        status = "Unknown"

        for condition in node.status.conditions:
            if condition.type == "Ready":
                status = "Ready" if condition.status == "True" else "NotReady"

        internal_ip = ""

        for address in node.status.addresses:
            if address.type == "InternalIP":
                internal_ip = address.address

        node_list.append({
            "name": node.metadata.name,
            "status": status,
            "version": node.status.node_info.kubelet_version,
            "os": node.status.node_info.os_image,
            "kernel": node.status.node_info.kernel_version,
            "containerRuntime": node.status.node_info.container_runtime_version,
            "ip": internal_ip,
            "cpu": "2 CPU",
            "memory": "4 GB"
        })

    return {"nodes": node_list}