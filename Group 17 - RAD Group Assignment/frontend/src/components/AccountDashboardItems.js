import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const AccountDashboardItems = ({ account }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleDeleteClick = async () => {
    const response = await fetch("/accounts/" + account._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    // const json = await response.json();

    if (response.ok) {
      //setSingleTopUp(json);
      //console.log("Clicked", singletopup);
      window.location.reload(true);
      //navigate("/coachDashboard");
    }
  };

  const handleEditClick = async () => {
    navigate("/accountDashboard/edit/" + account._id);
  };

  return (
    <div className="rankup-details">
      <div className="row">
        <div className="column">
          <h4>{account.game_name}</h4>
          <p>
            <strong>Username: </strong>
            {account.acc_user_name}
          </p>
          <p>
            <strong>Price: </strong>
            {account.sale_price}
          </p>
          <p>
            <strong>Duration: </strong>
            {account.offer_standing_duration}
          </p>
          <p>
            <strong>Insurance: </strong>
            {account.offer_insurance}
          </p>
          <p>
            <strong>Description: </strong>
            {account.description}
          </p>
          <div className="update-btn">
            <button onClick={handleEditClick} id="btn">
              Edit
            </button>
            <button onClick={handleDeleteClick} id="btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboardItems;
