import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

//components
import RankupDetails from "../components/RankupDetails";

const Rankup = () => {
  const [rankups, setRankups] = useState(null);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRankups = async () => {
      const response = await fetch("/rankups");
      const json = await response.json();

      if (response.ok) {
        setRankups(json);
      }
    };
    fetchRankups();
  }, []);

  const handleClick = async () => {
    navigate("/rankups/add");
  };

  return (
    <div className="home">
      <h1>Powerlevelling</h1>
      {user && (
        <button onClick={handleClick} id="btn-order">
          Become a Seller
        </button>
      )}
      <div className="rankups">
        {rankups &&
          rankups.map((rankup) => (
            <RankupDetails key={rankup._id} rankup={rankup} />
          ))}
      </div>
    </div>
  );
};

export default Rankup;
