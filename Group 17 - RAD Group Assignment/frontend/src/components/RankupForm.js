import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const RankupForm = () => {
  const [gameName, setGameName] = useState("");
  const [cRank, setCRank] = useState("");
  const [eRank, setERank] = useState("");
  const [duration, setDuration] = useState("");
  const [amount, setAmount] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rankup = {
      gameName,
      cRank,
      eRank,
      duration,
      amount,
      username,
      password,
    };
    const response = await fetch("/rankups/add", {
      method: "POST",
      body: JSON.stringify(rankup),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setGameName("");
      setCRank("");
      setERank("");
      setDuration("");
      setAmount("");
      setUsername("");
      setPassword("");
      setError(null);
      console.log("New rankup order added", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <div className="rankupForm">
        <br />
        <h1>Add a new rankup order</h1>
        <label id="rankup">Game Name: </label>
        <input
          type="text"
          onChange={(e) => setGameName(e.target.value)}
          value={gameName}
          id="field"
        />
        <br />
        <br />

        <label id="rankup">Current Rank: </label>
        <input
          type="text"
          onChange={(e) => setCRank(e.target.value)}
          value={cRank}
          id="field"
        />
        <br />
        <br />

        <label id="rankup">Expected Rank: </label>
        <input
          type="text"
          onChange={(e) => setERank(e.target.value)}
          value={eRank}
          id="field"
        />
        <br />
        <br />

        <label id="rankup">Duration: </label>
        <input
          type="text"
          onChange={(e) => setDuration(e.target.value)}
          value={duration}
          id="field"
        />
        <br />
        <br />

        <label id="rankup">Amount: </label>
        <input
          type="text"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          id="field"
        />
        <br />
        <br />

        <label id="rankup">Username: </label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          id="field"
        />
        <br />
        <br />

        <label id="rankup">Password: </label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="field"
        />
        <br />
        <br />
        <br />

        <button id="btn-rankup">Add Rankup Order</button>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default RankupForm;
