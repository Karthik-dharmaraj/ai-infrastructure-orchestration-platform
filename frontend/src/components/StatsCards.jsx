import { useEffect, useState } from "react";
import API from "../services/api";

function StatsCards() {
  const [nodes, setNodes] = useState([]);
  const [pods, setPods] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const nodeRes = await API.get("/nodes");

      const podRes = await API.get("/pods");

      setNodes(nodeRes.data.nodes || []);

      setPods(podRes.data.pods || []);
    } catch (error) {
      console.error(error);
    }
  };

  const healthyNodes = nodes.filter(
    (n) => n.status === "Ready"
  ).length;

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h2>{nodes.length}</h2>
        <p>Total Nodes</p>
      </div>

      <div className="stat-card">
        <h2>{healthyNodes}</h2>
        <p>Healthy Nodes</p>
      </div>

      <div className="stat-card">
        <h2>{pods.length}</h2>
        <p>Total Pods</p>
      </div>

      <div className="stat-card">
        <h2>ACTIVE</h2>
        <p>AI Monitoring</p>
      </div>
    </div>
  );
}

export default StatsCards;