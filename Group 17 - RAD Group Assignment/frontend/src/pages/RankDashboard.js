import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

//components
import RankupDashboardItems from "../components/RankDashboardItems";

const RankDashboard = () => {
  const [rankups, setRankups] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchRankups = async () => {
      const response = await fetch("/rankups/dashboard", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setRankups(json);
      }
    };

    if (user) {
      fetchRankups();
    }
  }, [user]);

  return (
    <div className="home">
      <div className="rankups">
        <br />
        <br />
        <br />
        {rankups &&
          rankups.map((rankup) => (
            <RankupDashboardItems key={rankup._id} rankup={rankup} />
          ))}
      </div>
    </div>
  );
};

export default RankDashboard;
