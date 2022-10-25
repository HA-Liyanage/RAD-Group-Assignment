import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import CoachingDetails from "../components/CoachingDetails";

const Coaching = () => {
  const [coaches, setCoaches] = useState(null);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/coaching");
      const json = await response.json();

      if (response.ok) {
        setCoaches(json);
      }
    };

    fetchWorkouts();
  }, []);

  const handleClick = async () => {
    navigate("/coaching/add");
  };

  return (
    <div className="home">
      <h1>Coaching</h1>
      {user && (
        <button onClick={handleClick} id="btn-order">
          Become a Seller
        </button>
      )}
      <div className="rankups">
        {coaches &&
          coaches.map((coach) => (
            <CoachingDetails key={coach._id} coach={coach} />
          ))}
      </div>
    </div>
  );
};

export default Coaching;
