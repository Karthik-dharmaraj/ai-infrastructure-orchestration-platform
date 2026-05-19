from fastapi import FastAPI
from app.routes import nodes, pods, deploy, health, ai

app = FastAPI(
    title="AI Kubernetes Platform",
    version="1.0.0"
)

app.include_router(nodes.router)
app.include_router(pods.router)
app.include_router(deploy.router)
app.include_router(health.router)
app.include_router(ai.router)

@app.get("/")
def home():
    return {
        "message": "AI Kubernetes Platform Backend Running"
    }