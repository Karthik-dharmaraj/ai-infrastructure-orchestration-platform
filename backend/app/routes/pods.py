from fastapi import APIRouter
from app.kubernetes_client import core_v1

router = APIRouter()

@router.get("/pods")
def get_pods():
    pods = core_v1.list_pod_for_all_namespaces().items

    pod_list = []

    for pod in pods:
        pod_list.append({
            "name": pod.metadata.name,
            "namespace": pod.metadata.namespace,
            "status": pod.status.phase
        })

    return {
        "totalPods": len(pod_list),
        "pods": pod_list
    }