import StatsCards from "../components/StatsCards";

function Dashboard() {
  return (
    <div>
      <h1 className="page-title">
        Kubernetes Dashboard
      </h1>

      <StatsCards />
    </div>
  );
}

export default Dashboard;