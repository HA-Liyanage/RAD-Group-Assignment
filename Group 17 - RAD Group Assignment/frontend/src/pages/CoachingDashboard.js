import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import CoachDashboardItems from "../components/CoachDashboardItems";

const CoachingDashboard = () => {
  const [coaches, setCoaches] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/coaching/dashboard", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setCoaches(json);
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [user]);

  return (
    <div className="home">
      <div className="rankups">
        {coaches &&
          coaches.map((coach) => (
            <CoachDashboardItems key={coach._id} coach={coach} />
          ))}
      </div>
    </div>
  );
};

export default CoachingDashboard;
