import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const UpdateSingleCoach = () => {
  const { id } = useParams();
  const [topups, setTopups] = useState(null);
  //const navigate = useNavigate();
  const { user } = useAuthContext();

  const [Offer_ID, setOffer_ID] = useState("");
  const [platform, setplatform] = useState("");
  const [service_type, setservice_type] = useState("");
  const [coaching_type, setcoaching_type] = useState("");
  const [coach_tier, setcoach_tier] = useState("");
  const [experience, setexperience] = useState("");
  const [language, setlanguage] = useState("");

  useEffect(() => {
    const fetchTopupoffers = async () => {
      const response = await fetch("/coaching/" + id, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setTopups(json);
        //console.log(json.gameName);

        setOffer_ID(json.Offer_ID);
        setplatform(json.platform);
        setservice_type(json.service_type);
        setcoaching_type(json.coaching_type);
        setcoach_tier(json.coach_tier);
        setexperience(json.experience);
        setlanguage(json.language);
        console.log(topups);
      }
    };

    if (user) {
      fetchTopupoffers();
    }
  }, [id, user]);

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const rankupOrder = {
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

    const response = await fetch("/coaching/" + id, {
      method: "PATCH",
      body: JSON.stringify(rankupOrder),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }

    if (response.ok) {
      setOffer_ID("");
      setplatform("");
      setservice_type("");
      setcoaching_type("");
      setcoach_tier("");
      setexperience("");
      setlanguage("");
      console.log("workout updated: ", json);

      //navigate("/rankDashboard");
    }
  };

  return (
    <div className="home-topup" onSubmit={handleEditSubmit}>
      <form className="updaterankupform">
        <br />
        <h1>Edit Your Coaching Form</h1>
        <p>
          Game Name
          <input
            type="text"
            onChange={(e) => setOffer_ID(e.target.value)}
            value={Offer_ID}
          />{" "}
        </p>

        <p>
          Platform
          <input
            type="text"
            onChange={(e) => setplatform(e.target.value)}
            value={platform}
          />{" "}
        </p>

        <p>
          Coaching Service Type
          <input
            type="text"
            onChange={(e) => setservice_type(e.target.value)}
            value={service_type}
          />{" "}
        </p>

        <p>
          Coaching Type
          <input
            type="text"
            onChange={(e) => setcoaching_type(e.target.value)}
            value={coaching_type}
          />{" "}
        </p>

        <p>
          Coach Tier
          <input
            type="text"
            onChange={(e) => setcoach_tier(e.target.value)}
            value={coach_tier}
          />{" "}
        </p>

        <p>
          Coach Experience
          <input
            type="text"
            onChange={(e) => setexperience(e.target.value)}
            value={experience}
          />{" "}
        </p>

        <p>
          Language
          <input
            type="text"
            onChange={(e) => setlanguage(e.target.value)}
            value={language}
          />{" "}
        </p>

        <button id="btn-update">Update</button>
      </form>
    </div>
  );
};

export default UpdateSingleCoach;
