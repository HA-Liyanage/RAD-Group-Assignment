import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const SingleTopup = () => {
  const { id } = useParams();
  const [topups, setTopups] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTopupoffers = async () => {
      const response = await fetch("/topups/" + id, {
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
  }, [id, user]);

  return (
    <div className="home-topup">
      <br />
      <br />
      <h1>{topups && topups.title}</h1>
      <p>
        <strong>Offer Id:</strong>
      </p>
      <div className="fields">{topups && topups._id}</div>

      <hr />
      <p>
        <strong>Game Name:</strong>
      </p>
      <div className="fields">{topups && topups.gameName}</div>
      <hr />
      <p>
        <strong>Platform:</strong>
      </p>
      <div className="fields">{topups && topups.platform}</div>
      <hr />
      <p>
        <strong>Item:</strong>
      </p>
      <div className="fields">{topups && topups.topupItem}</div>
      <hr />
      <p>
        <strong>Amount:</strong>
      </p>
      <div className="fields">{topups && topups.count}</div>
      <hr />
      <p>
        <strong>Duration:</strong>
      </p>
      <div className="fields">{topups && topups.duration}</div>
      <hr />
      <p>
        <strong>Description:</strong>
      </p>
      <div className="fields">{topups && topups.description}</div>
    </div>
  );
};

export default SingleTopup;
