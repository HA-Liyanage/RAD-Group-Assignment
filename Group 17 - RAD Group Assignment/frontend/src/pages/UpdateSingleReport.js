import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { useAuthContext } from "../hooks/useAuthContext";

const UpdateSingleReport = () => {
  const { id } = useParams();
  const [topups, setTopups] = useState(null);
  const navigate = useNavigate();
  //const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    const fetchTopupoffers = async () => {
      const response = await fetch("/reports/" + id);
      const json = await response.json();

      if (response.ok) {
        setTopups(json);
        console.log(json.gameName);

        setTitle(json.title);
        setDetails(json.details);

        console.log(topups);
      }
    };

    //if (user) {
    fetchTopupoffers();
    //}
  }, [id]);

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const rankupOrder = {
      title,
      details,
    };

    const response = await fetch("/reports/" + id, {
      method: "PATCH",
      body: JSON.stringify(rankupOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }

    if (response.ok) {
      setTitle("");
      setDetails("");

      navigate("/reports");
    }
  };

  return (
    <div className="home-topup" onSubmit={handleEditSubmit}>
      <form className="updaterankupform">
        <h1>Edit Your Report</h1>
        <p>
          Title:
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </p>

        <p>
          Details:
          <input
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          />
        </p>
        <br />
        <button id="btn-update">Update</button>
      </form>
    </div>
  );
};

export default UpdateSingleReport;
