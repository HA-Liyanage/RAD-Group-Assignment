import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const RankupDashboardItems = ({ rankup }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleDeleteClick = async () => {
    const response = await fetch("/rankups/" + rankup._id, {
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
    navigate("/rankDashboard/edit/" + rankup._id);
  };

  return (
    <div className="rankup-details">
      <div className="row">
        <div className="column">
          <h4>{rankup.gameName}</h4>
          <p>
            <strong>Current Rank: </strong>
            {rankup.cRank}
          </p>
          <p>
            <strong>Expected Rank: </strong>
            {rankup.eRank}
          </p>
          <p>
            <strong>Duration: </strong>
            {rankup.duration}
          </p>
          <p>
            <strong>Amount: </strong>
            {rankup.amount}
          </p>
          <p>
            <strong>Username: </strong>
            {rankup.username}
            <br />
            <br />
          </p>
          {/* <p>
            <strong>Password: </strong>
            {rankup.password}
          </p>
          <p>{rankup.createdAt}</p> */}
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

export default RankupDashboardItems;
