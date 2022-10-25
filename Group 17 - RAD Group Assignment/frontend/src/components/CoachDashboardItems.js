import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const CoachDashboardItems = ({ coach }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleDeleteClick = async () => {
    const response = await fetch("/coaching/" + coach._id, {
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
    navigate("/coachDashboard/edit/" + coach._id);
  };

  return (
    <div className="rankup-details">
      <br />
      <br />
      <br />
      <div className="row">
        <div className="column">
          <h4>Coaching</h4>
          <p>
            <strong>Offer ID:</strong>
            {coach.Offer_ID}
          </p>
          <p>
            <strong>Platform:</strong>
            {coach.platform}
          </p>
          <p>
            <strong>Coaching Service Type:</strong>
            {coach.service_type}
          </p>
          <p>
            <strong>Coaching Type:</strong>
            {coach.coaching_type}
          </p>
          <p>
            <strong>Coach Tier:</strong>
            {coach.coach_tier}
          </p>
          <p>
            <strong>Coach Experience:</strong>
            {coach.experience}
          </p>
          <p>
            <strong>Language:</strong>
            {coach.language}
          </p>
          <p>{coach.createdAt}</p>
          <button onClick={handleEditClick} id="btn">
            Edit
          </button>
          <button onClick={handleDeleteClick} id="btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoachDashboardItems;
