import { Link } from "react-router-dom";

const CoachingDetails = ({ coach }) => {
  return (
    <div childrenlassName="rankup-details">
      <div className="row">
        <div className="column">
          <h4>{coach.Offer_ID}</h4>
          <p>
            <strong>Game Name:</strong>
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
          <div>
            <Link to={`/coaching/${coach._id}`}>
              <button id="btn-view">view more</button>
              <br />
              <br />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingDetails;
