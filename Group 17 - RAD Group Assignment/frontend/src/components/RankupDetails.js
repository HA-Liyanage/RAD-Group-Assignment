import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const RankupDetails = ({ rankup }) => {
  const { user } = useAuthContext();

  let pathValue;

  if (user) {
    pathValue = `/rankups/${rankup._id}`;
  }

  if (!user) {
    pathValue = "/";
  }

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
          </p>
          {/* <p>
            <strong>Password: </strong>
            {rankup.password}
          </p>
          <p>{rankup.createdAt}</p> */}
          <div>
            <Link to={pathValue}>
              <button id="btn-view">View More</button>
              <br />
              <br />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankupDetails;
