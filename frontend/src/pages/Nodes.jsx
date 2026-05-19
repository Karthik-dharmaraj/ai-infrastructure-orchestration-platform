import { useEffect, useState } from "react";

import API from "../services/api";
import NodeCard from "../components/NodeCard";

function Nodes() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    fetchNodes();
  }, []);

  const fetchNodes = async () => {
    try {
      const response = await API.get(
        "/nodes"
      );

      setNodes(response.data.nodes || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="page-title">
        Cluster Nodes
      </h1>

      <div className="node-grid">
        {nodes.map((node, index) => (
          <NodeCard
            key={index}
            node={node}
          />
        ))}
      </div>
    </div>
  );
}

export default Nodes;