import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const UpdateSingleTopup = () => {
  const { id } = useParams();
  const [topups, setTopups] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const [gameName, setGameName] = useState("");
  const [topupItem, settopupItem] = useState("");
  const [count, setCount] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [duration, setDuration] = useState("");

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
        console.log(json.gameName);

        setGameName(json.gameName);
        settopupItem(json.topupItem);
        setCount(json.count);
        setPrice(json.price);
        setDescription(json.description);
        setTitle(json.title);
        setPlatform(json.platform);
        setDuration(json.duration);
        console.log(topups);
      }
    };

    if (user) {
      fetchTopupoffers();
    }
  }, [id, user]);

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const topupOrder = {
      gameName,
      topupItem,
      count,
      price,
      description,
      title,
      platform,
      duration,
    };

    if (!user) {
      console.log("User must be logged in");
      return;
    }

    const response = await fetch("/topups/" + id, {
      method: "PATCH",
      body: JSON.stringify(topupOrder),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    //if (!response.ok) {
    //setError(json.error);
    //}

    if (response.ok) {
      setGameName("");
      settopupItem("");
      setCount("");
      setPrice("");
      setDescription("");
      console.log("workout updated: ", json);

      navigate("/dashboard");
    }
  };

  return (
    <div className="home-topup" onSubmit={handleEditSubmit}>
      <form className="updaterankupform">
        <br />
        <h1>Edit Your Topup Order</h1>
        <p>
          Title:
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </p>
        <p>
          Game Name:
          <input
            type="text"
            onChange={(e) => setGameName(e.target.value)}
            value={gameName}
          />
        </p>
        <p>
          TopUpItem Name:
          <input
            type="text"
            onChange={(e) => settopupItem(e.target.value)}
            value={topupItem}
          />
        </p>
        <p>
          {" "}
          Platform:
          <input
            type="text"
            onChange={(e) => setPlatform(e.target.value)}
            value={platform}
          />
        </p>
        <p>
          {" "}
          Count:
          <input
            type="number"
            onChange={(e) => setCount(e.target.value)}
            value={count}
          />
        </p>
        <p>
          Price:
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
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
          {" "}
          Description:
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </p>
        <button id="btn-update">Update</button>
      </form>
    </div>
  );
};

export default UpdateSingleTopup;
