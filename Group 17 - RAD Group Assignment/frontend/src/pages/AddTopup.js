import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const AddTopup = () => {
  const [gameName, setGameName] = useState("");
  const [topupItem, settopupItem] = useState("");
  const [count, setCount] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const topupOrder = {
      gameName,
      topupItem,
      count,
      price,
      description,
      title,
      duration,
      platform,
    };

    const response = await fetch("/topups/add", {
      method: "POST",
      body: JSON.stringify(topupOrder),
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
      setError(null);
      setGameName("");
      settopupItem("");
      setCount("");
      setPrice("");
      setDescription("");
      setTitle("");
      setPlatform("");
      setDuration("");
      console.log("new workout added: ", json);
    }
  };

  return (
    <form className="addtopupform" onSubmit={handleSubmit}>
      <div className="rankupForm">
        <br />
        <h1>Add a new topup order</h1>
        <label id="rankup"> Title: </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <br />
        <br />
        <label id="rankup"> Game Name: </label>
        <input
          type="text"
          onChange={(e) => setGameName(e.target.value)}
          value={gameName}
        />
        <br />
        <br />
        <label id="rankup"> Platform: </label>
        <input
          type="text"
          onChange={(e) => setPlatform(e.target.value)}
          value={platform}
          id="field"
        />
        <br />
        <br />
        <label id="rankup"> TopUpItem Name: </label>
        <input
          type="text"
          onChange={(e) => settopupItem(e.target.value)}
          value={topupItem}
          id="field"
        />
        <br />
        <br />
        <label id="rankup"> Amount: </label>
        <input
          type="number"
          onChange={(e) => setCount(e.target.value)}
          value={count}
          id="field"
        />
        <br />
        <br />
        <label id="rankup"> Price: </label>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          id="field"
        />
        <br />
        <br />
        <label id="rankup"> Duration: </label>
        <input
          type="text"
          onChange={(e) => setDuration(e.target.value)}
          value={duration}
          id="field"
        />
        <br />
        <br />
        <label id="rankup"> Description: </label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          id="field"
        />
        <br />
        <br />
        <br />

        <button id="btn-rankup">Add Topup Order</button>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default AddTopup;
