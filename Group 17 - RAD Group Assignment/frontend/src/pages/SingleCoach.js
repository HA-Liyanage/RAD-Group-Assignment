import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const SingleCoach = () => {
  const { id } = useParams();
  const [coach, setCoach] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchRankup = async () => {
      const response = await fetch("/coaching/" + id, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setCoach(json);
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
      {/* <div className="detail"> */}

      <p>
        <strong>Offer ID:</strong>
      </p>
      <div className="fields">{coach && coach.Offer_ID}</div>
      {/*</div>*/}
      <hr />
      <p>
        <strong>Platform</strong>
      </p>
      <div className="fields">{coach && coach.platform}</div>
      <hr />

      <p>
        <strong>Service Type:</strong>
      </p>
      <div className="fields">{coach && coach.service_type}</div>

      <hr />

      <p>
        <strong>Coaching Type:</strong>
      </p>
      <div className="fields">{coach && coach.coaching_type}</div>

      <hr />

      <p>
        <strong>Coach Tier:</strong>
      </p>
      <div className="fields">{coach && coach.coach_tier}</div>

      <hr />

      <p>
        <strong>Experience:</strong>
      </p>
      <div className="fields">{coach && coach.experience}</div>

      <hr />

      <p>
        <strong>Language:</strong>
      </p>
      <div className="fields">{coach && coach.language}</div>
    </div>
  );
};

export default SingleCoach;
