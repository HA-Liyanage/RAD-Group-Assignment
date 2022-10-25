import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const UpdateSingleRankup = () => {
  const { id } = useParams();
  const [topups, setTopups] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const [gameName, setGameName] = useState("");
  const [cRank, setCRank] = useState("");
  const [eRank, setERank] = useState("");
  const [duration, setDuration] = useState("");
  const [amount, setAmount] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchTopupoffers = async () => {
      const response = await fetch("/rankups/" + id, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setTopups(json);
        console.log(json.gameName);

        setGameName(json.gameName);
        setCRank(json.cRank);
        setERank(json.eRank);
        setDuration(json.duration);
        setAmount(json.amount);
        setUsername(json.username);
        setPassword(json.password);
        console.log(topups);
      }
    };

    if (user) {
      fetchTopupoffers();
    }
  }, [id, user]);

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const rankupOrder = {
      gameName,
      cRank,
      eRank,
      duration,
      amount,
      username,
      password,
    };

    if (!user) {
      return;
    }

    const response = await fetch("/rankups/" + id, {
      method: "PATCH",
      body: JSON.stringify(rankupOrder),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }

    if (response.ok) {
      setGameName("");
      setCRank("");
      setERank("");
      setDuration("");
      setAmount("");
      setUsername("");
      setPassword("");
      console.log("workout updated: ", json);

      navigate("/rankDashboard");
    }
  };

  return (
    <div className="home-topup" onSubmit={handleEditSubmit}>
      <form className="updaterankupform">
        <br />
        <h1>Edit Your Rankup Order</h1>
        <p>
          Game Name:
          <input
            type="text"
            onChange={(e) => setGameName(e.target.value)}
            value={gameName}
          />
        </p>

        <p>
          Current Rank:
          <input
            type="text"
            onChange={(e) => setCRank(e.target.value)}
            value={cRank}
          />
        </p>

        <p>
          Expected Rank:
          <input
            type="text"
            onChange={(e) => setERank(e.target.value)}
            value={eRank}
          />
        </p>

        <p>
          Duration:
          <input
            type="text"
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
          />
        </p>

        <p>
          Amount:
          <input
            type="text"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </p>

        <p>
          Username:
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </p>

        <p>
          Password:
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </p>
        <button id="btn-update">Update</button>
      </form>
    </div>
  );
};

export default UpdateSingleRankup;
