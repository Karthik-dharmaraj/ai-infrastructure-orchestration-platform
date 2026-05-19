import {
  FaTachometerAlt,
  FaServer,
  FaCube,
  FaRobot,
} from "react-icons/fa";

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2 className="logo">
        Kubernetes AI
      </h2>

      <button onClick={() => setPage("dashboard")}>
        <FaTachometerAlt />
        Dashboard
      </button>

      <button onClick={() => setPage("nodes")}>
        <FaServer />
        Nodes
      </button>

      <button onClick={() => setPage("pods")}>
        <FaCube />
        Pods
      </button>

      <button>
        <FaRobot />
        AI Agent
      </button>
    </div>
  );
}

export default Sidebar;