import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const SingleRankup = () => {
  const { id } = useParams();
  const [rankup, setRankup] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchRankup = async () => {
      const response = await fetch("/rankups/" + id, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setRankup(json);
      }
    };

    if (user) {
      fetchRankup();
    }
  }, [id, user]);

  return (
    <div className="singleRankup">
      <br />
      <br />
      <br />
      <p>
        <strong>Game Name:</strong>
      </p>
      <div className="fields">{rankup && rankup.gameName}</div>
      <hr />

      <p>
        <strong>Current Rank:</strong>
      </p>
      <div className="fields">{rankup && rankup.cRank}</div>
      <hr />

      <p>
        <strong>Expected Rank:</strong>
      </p>
      <div className="fields">{rankup && rankup.eRank}</div>
      <hr />

      <p>
        <strong>Duration:</strong>
      </p>
      <div className="fields">{rankup && rankup.duration}</div>
      <hr />

      <p>
        <strong>Amount:</strong>
      </p>
      <div className="fields">{rankup && rankup.amount}</div>
      <hr />

      <p>
        <strong>Username:</strong>
      </p>
      <div className="fields">{rankup && rankup.username}</div>
      <hr />

      <p>
        <strong>Password:</strong>
      </p>
      <div className="fields">{rankup && rankup.password}</div>
    </div>
  );
};

export default SingleRankup;
