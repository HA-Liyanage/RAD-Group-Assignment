import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

//components
import ReportDetails from "../components/ReportDetails";

const Report = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const [reports, setReports] = useState(null);
  //const { user } = useAuthContext();

  useEffect(() => {
    const fetchReports = async () => {
      const response = await fetch("/reports", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setReports(json);
        console.log(json);
      }
    };

    if (user) {
      fetchReports();
    }
  }, [user]);

  const handleClick = async () => {
    navigate("/reports/add");
  };

  return (
    <div className="home">
      <h1>Reports</h1>
      <button onClick={handleClick} id="btn-order">
        File a Report
      </button>
      <div className="reports">
        {reports &&
          reports.map((report) => (
            <ReportDetails key={report._id} report={report} />
          ))}
      </div>
    </div>
  );
};

export default Report;
