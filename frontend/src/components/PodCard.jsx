function PodCard({ pod }) {
  return (
    <div className="pod-card">
      <h3>{pod.name}</h3>

      <p>
        Namespace: {pod.namespace}
      </p>

      <p>
        Status:
        <span
          className={
            pod.status === "Running"
              ? "status-ready"
              : "status-error"
          }
        >
          {" "}
          {pod.status}
        </span>
      </p>
    </div>
  );
}

export default PodCard;