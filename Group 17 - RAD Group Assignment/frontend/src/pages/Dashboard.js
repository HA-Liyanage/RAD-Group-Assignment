import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

//components
import DashboardItems from "../components/DashboardItems";

const Dashboard = () => {
  const [topups, setTopups] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTopupoffers = async () => {
      const response = await fetch("/topups/dashboard", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setTopups(json);
      }
    };

    if (user) {
      fetchTopupoffers();
    }
  }, [user]);

  return (
    <div className="topup-home">
      <div className="topup-sales">
        {topups &&
          topups.map((topup) => (
            <DashboardItems key={topup._id} topup={topup} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
