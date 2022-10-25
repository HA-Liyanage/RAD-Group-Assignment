import { useNavigate } from "react-router-dom";

const ReportDetails = ({ report }) => {
  const navigate = useNavigate();

  const handleDeleteClick = async () => {
    const response = await fetch("/reports/" + report._id, {
      method: "DELETE",
    });
    // const json = await response.json();

    if (response.ok) {
      window.location.reload(true);
      //navigate("/coachDashboard");
    }
  };

  const handleEditClick = async () => {
    navigate("/reports/edit/" + report._id);
  };

  return (
    <div className="workout-details">
      <p>
        <strong>Title:</strong>
        {report.title}
      </p>
      <br />
      <p>
        <strong>Details:</strong>
        {report.details}
      </p>
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
  );
};

export default ReportDetails;
