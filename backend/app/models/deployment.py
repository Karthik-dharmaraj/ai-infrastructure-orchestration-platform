from pydantic import BaseModel

class DeploymentRequest(BaseModel):
    name: str
    image: str
    replicas: int