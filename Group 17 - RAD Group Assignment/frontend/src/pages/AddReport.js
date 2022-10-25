import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const AddReport = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const topupOrder = {
      title,
      details,
    };

    if (!user) {
      return;
    }

    const response = await fetch("/reports/add", {
      method: "POST",
      body: JSON.stringify(topupOrder),
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
      setError(null);
      setTitle("");
      setDetails("");
      console.log("new workout added: ", json);
    }
  };

  return (
    <form className="addtopupform" onSubmit={handleSubmit}>
      <div className="rankupForm">
        <br />
        <h1>Add a new rankup order</h1>
        <label id="rankup"> Title: </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <br />
        <br />
        <label id="rankup"> Details: </label>
        <input
          type="text"
          onChange={(e) => setDetails(e.target.value)}
          value={details}
        />
        <br />
        <br />
        <br />
        <button id="btn-rankup">Submit Report</button>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default AddReport;
