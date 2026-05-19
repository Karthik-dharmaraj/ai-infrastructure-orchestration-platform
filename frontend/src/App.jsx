import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Nodes from "./pages/Nodes";
import Pods from "./pages/Pods";
import Sidebar from "./components/Sidebar";

function App() {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "nodes":
        return <Nodes />;

      case "pods":
        return <Pods />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar setPage={setPage} />

      <div className="main-content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;