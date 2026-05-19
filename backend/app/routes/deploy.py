from fastapi import APIRouter
from kubernetes import client
from app.kubernetes_client import apps_v1
from app.models.deployment import DeploymentRequest

router = APIRouter()

# CREATE DEPLOYMENT
@router.post("/deploy")
def deploy_app(request: DeploymentRequest):

    container = client.V1Container(
        name=request.name,
        image=request.image,
        ports=[client.V1ContainerPort(container_port=80)]
    )

    template = client.V1PodTemplateSpec(
        metadata=client.V1ObjectMeta(labels={"app": request.name}),
        spec=client.V1PodSpec(containers=[container])
    )

    spec = client.V1DeploymentSpec(
        replicas=request.replicas,
        template=template,
        selector={'matchLabels': {'app': request.name}}
    )

    deployment = client.V1Deployment(
        api_version="apps/v1",
        kind="Deployment",
        metadata=client.V1ObjectMeta(name=request.name),
        spec=spec
    )

    apps_v1.create_namespaced_deployment(
        namespace="default",
        body=deployment
    )

    return {
        "message": f"Deployment {request.name} created"
    }


# GET DEPLOYMENTS
@router.get("/deployments")
def get_deployments():

    deployments = apps_v1.list_namespaced_deployment(
        namespace="default"
    )

    deployment_list = []

    for deploy in deployments.items:

        deployment_list.append({
            "name": deploy.metadata.name,
            "replicas": deploy.spec.replicas,
            "available": deploy.status.available_replicas or 0
        })

    return {
        "totalDeployments": len(deployment_list),
        "deployments": deployment_list
    }