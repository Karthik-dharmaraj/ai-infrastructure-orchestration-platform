function NodeCard({ node }) {
  return (
    <div className="node-card">
      <div className="node-header">
        <h2>{node.name}</h2>

        <span
          className={
            node.status === "Ready"
              ? "status-ready"
              : "status-error"
          }
        >
          ● {node.status}
        </span>
      </div>

      <p>
        <strong>IP:</strong> {node.ip}
      </p>

      <p>
        <strong>Version:</strong>{" "}
        {node.version}
      </p>

      <p>
        <strong>OS:</strong> {node.os}
      </p>

      <p>
        <strong>Kernel:</strong>{" "}
        {node.kernel}
      </p>

      <p>
        <strong>Runtime:</strong>{" "}
        {node.containerRuntime}
      </p>

      <p>
        <strong>CPU:</strong> {node.cpu}
      </p>

      <p>
        <strong>Memory:</strong>{" "}
        {node.memory}
      </p>
    </div>
  );
}

export default NodeCard;