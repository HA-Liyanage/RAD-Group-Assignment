import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const CoachingForm = () => {
  const [Offer_ID, setOffer_ID] = useState("");
  const [platform, setplatform] = useState("");
  const [service_type, setservice_type] = useState("");
  const [coaching_type, setcoaching_type] = useState("");
  const [coach_tier, setcoach_tier] = useState("");
  const [experience, setexperience] = useState("");
  const [language, setlanguage] = useState("");
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = {
      Offer_ID,
      platform,
      service_type,
      coaching_type,
      coach_tier,
      experience,
      language,
    };

    if (!user) {
      return;
    }

    const response = await fetch("/coaching/add", {
      method: "Post",
      body: JSON.stringify(workout),
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
      setOffer_ID("");
      setplatform("");
      setservice_type("");
      setcoaching_type("");
      setcoach_tier("");
      setexperience("");
      setlanguage("");
      setError(null);
      console.log("New Coach Added", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <div className="rankupForm">
        <br />
        <br />
        <br />
        <h1>Add New Coach</h1>
        <lable id="rankup">Game Name</lable>
        <input
          type="text"
          onChange={(e) => setOffer_ID(e.target.value)}
          value={Offer_ID}
          id="field"
        />{" "}
        <br />
        <br />
        <lable id="rankup">Platform</lable>
        <input
          type="text"
          onChange={(e) => setplatform(e.target.value)}
          value={platform}
          id="field"
        />{" "}
        <br />
        <br />
        <lable id="rankup">Coaching Service Type</lable>
        <input
          type="text"
          onChange={(e) => setservice_type(e.target.value)}
          value={service_type}
          id="field"
        />{" "}
        <br />
        <br />
        <lable id="rankup">Coaching Type</lable>
        <input
          type="text"
          onChange={(e) => setcoaching_type(e.target.value)}
          value={coaching_type}
          id="field"
        />{" "}
        <br />
        <br />
        <lable id="rankup">Coach Tier</lable>
        <input
          type="text"
          onChange={(e) => setcoach_tier(e.target.value)}
          value={coach_tier}
          id="field"
        />{" "}
        <br />
        <br />
        <lable id="rankup">Coach Experience</lable>
        <input
          type="text"
          onChange={(e) => setexperience(e.target.value)}
          value={experience}
          id="field"
        />{" "}
        <br />
        <br />
        <lable id="rankup">Language</lable>
        <input
          type="text"
          onChange={(e) => setlanguage(e.target.value)}
          value={language}
          id="field"
        />{" "}
        <br />
        <br />
        <br />
        <button id="btn-rankup">Add Coach</button>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default CoachingForm;
