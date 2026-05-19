from fastapi import APIRouter

router = APIRouter()

@router.post("/ai")
def ai_assistant(data: dict):

    message = data.get("message", "").lower()

    if "unhealthy" in message:
        return {
            "response": "All Kubernetes nodes are healthy."
        }

    elif "pods" in message:
        return {
            "response": "Pods are running successfully."
        }

    elif "deployment" in message:
        return {
            "response": "Deployments are stable."
        }

    elif "scale" in message:
        return {
            "response": "Scaling recommendations generated."
        }

    return {
        "response": f"AI Assistant received: {message}"
    }