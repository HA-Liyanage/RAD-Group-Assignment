//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const DashboardItems = ({ topup }) => {
  //const [singletopup, setSingleTopUp] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleDeleteClick = async () => {
    if (!user) {
      console.log("User must be logged in");
      return;
    }

    const response = await fetch("/topups/" + topup._id, {
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
    }
  };

  const handleEditClick = async () => {
    navigate("/dashboard/edit/" + topup._id);
  };

  return (
    <div className="dashboard-items">
      <br />
      <br />
      <br />
      <div className="row">
        <div className="column">
          <h4>{topup.title}</h4>
          <p>
            <strong> Game Name: </strong>
            {topup.gameName}
          </p>

          <p>
            <strong> Platform: </strong>
            {topup.platform}
          </p>

          <p>
            <strong> Item: </strong>
            {topup.topupItem}
          </p>

          <p>
            <strong> Amount:</strong>
            {topup.count}
          </p>

          <p>
            <strong> Duration: </strong>
            {topup.duration}
          </p>
          <br />
          <br />
          <button onClick={handleEditClick} id="btn">
            Edit
          </button>
          <button onClick={handleDeleteClick} id="btn">
            Delete
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default DashboardItems;
