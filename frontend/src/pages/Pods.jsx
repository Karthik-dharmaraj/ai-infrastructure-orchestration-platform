import { useEffect, useState } from "react";

import API from "../services/api";
import PodCard from "../components/PodCard";

function Pods() {
  const [pods, setPods] = useState([]);

  useEffect(() => {
    fetchPods();
  }, []);

  const fetchPods = async () => {
    try {
      const response = await API.get(
        "/pods"
      );

      setPods(response.data.pods || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="page-title">
        Kubernetes Pods
      </h1>

      <div className="pod-grid">
        {pods.map((pod, index) => (
          <PodCard
            key={index}
            pod={pod}
          />
        ))}
      </div>
    </div>
  );
}

export default Pods;