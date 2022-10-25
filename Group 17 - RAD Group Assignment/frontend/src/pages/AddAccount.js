import react, { useState } from "react";
//import { useAccountsContext } from "../hooks/useAccountsContext";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const AddAccount = () => {
  //const { dispatch } = useAccountsContext();
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const [game_name, setGame_name] = useState("");
  const [offer_standing_duration, setOffer_standing_duration] = useState("");
  const [acc_user_name, setAcc_user_name] = useState("");
  const [password, setPassword] = useState("");
  const [sale_price, setSale_price] = useState("");
  const [description, setDescription] = useState("");
  const [offer_insurance, setOffer_insurance] = useState("");
  const [access, setAccess] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const account = {
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

    const response = await fetch("/accounts/add", {
      method: "POST",
      body: JSON.stringify(account),
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
      setGame_name("");
      setOffer_standing_duration("");
      setAcc_user_name("");
      setPassword("");
      setSale_price("");
      setDescription("");
      setOffer_insurance("");
      setAccess("");

      setError(null);
      console.log("new account added", json);
      //dispatch({ type: "CREATE_ACCOUNT", payload: json });

      navigate("/accounts");
    }
  };

  return (
    <form action="" className="create" onSubmit={handleSubmit}>
      <div className="rankupForm">
        <br />
        <h1>Add a new account</h1>
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
        <br></br>

        <button id="btn-rankup">Sell Account</button>

        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default AddAccount;
