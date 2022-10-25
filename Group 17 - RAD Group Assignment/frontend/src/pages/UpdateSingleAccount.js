import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const UpdateSingleAccount = () => {
  const { id } = useParams();
  const [topups, setTopups] = useState(null);
  //const navigate = useNavigate();
  const { user } = useAuthContext();

  const [game_name, setGame_name] = useState("");
  const [offer_standing_duration, setOffer_standing_duration] = useState("");
  const [acc_user_name, setAcc_user_name] = useState("");
  const [password, setPassword] = useState("");
  const [sale_price, setSale_price] = useState("");
  const [description, setDescription] = useState("");
  const [offer_insurance, setOffer_insurance] = useState("");
  const [access, setAccess] = useState("");

  useEffect(() => {
    const fetchTopupoffers = async () => {
      const response = await fetch("/accounts/" + id, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setTopups(json);
        console.log(json);

        setGame_name(json.game_name);
        setOffer_standing_duration(json.offer_standing_duration);
        setAcc_user_name(json.acc_user_name);
        setPassword(json.password);
        setSale_price(json.sale_price);
        setDescription(json.description);
        setOffer_insurance(json.offer_insurance);
        setAccess(json.access);
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
      game_name,
      offer_standing_duration,
      acc_user_name,
      password,
      sale_price,
      description,
      offer_insurance,
      access,
    };

    if (!user) {
      return;
    }

    const response = await fetch("/accounts/" + id, {
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
      setGame_name("");
      setOffer_standing_duration("");
      setAcc_user_name("");
      setPassword("");
      setSale_price("");
      setDescription("");
      setOffer_insurance("");
      setAccess("");
      console.log("workout updated: ", json);

      //navigate("/rankDashboard");
    }
  };

  return (
    <div className="home-topup" onSubmit={handleEditSubmit}>
      <form className="rankupForm">
        <br />
        <h1>Edit Your Account Order</h1>
        <label id="rankup">Name of the game: </label>
        <input
          type="text"
          onChange={(e) => setGame_name(e.target.value)}
          value={game_name}
        />
        <br></br>
        <br></br>
        <label id="rankup">Offer standing duration: </label>
        <input
          type="number"
          onChange={(e) => setOffer_standing_duration(e.target.value)}
          value={offer_standing_duration}
        />
        <br></br>
        <br></br>
        <label id="rankup">Account Username: </label>
        <input
          type="text"
          onChange={(e) => setAcc_user_name(e.target.value)}
          value={acc_user_name}
        />
        <br></br>
        <br></br>
        <label id="rankup">Password: </label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br></br>
        <br></br>
        <label id="rankup">Sale Price: </label>
        <input
          type="number"
          onChange={(e) => setSale_price(e.target.value)}
          value={sale_price}
        />
        <br></br>
        <br></br>
        <label id="rankup">Description: </label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <br></br>
        <br></br>
        <label id="rankup">Offer insurance? Yes/No: </label>
        <input
          type="text"
          onChange={(e) => setOffer_insurance(e.target.value)}
          value={offer_insurance}
        />
        <br></br>
        <br></br>
        <label id="rankup">Have access to email and password? </label>
        <input
          type="text"
          onChange={(e) => setAccess(e.target.value)}
          value={access}
        />
        <br></br>
        <button id="btn-update">Update</button>
      </form>
    </div>
  );
};

export default UpdateSingleAccount;
