import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const TopupSale = ({ topup }) => {
  const { user } = useAuthContext();

  let pathValue;

  if (user) {
    pathValue = `/topups/${topup._id}`;
  }

  if (!user) {
    pathValue = "/";
  }

  return (
    <div className="topup-sale-details">
      <div className="row">
        <div className="column">
          <h4>{topup.title}</h4>
          <p>
            <strong>Game Name:</strong>
            {topup.gameName}
          </p>
          <p>
            <strong>Platform:</strong>
            {topup.platform}
          </p>
          <p>
            <strong>Topup Item:</strong>
            {topup.topupItem}
          </p>
          <p>
            <strong>Amount:</strong>
            {topup.count}
          </p>
          <p>
            <strong>Price:</strong>
            {topup.price}
          </p>
          <p>
            <strong>Description:</strong>
            {topup.description}
          </p>
          <Link to={pathValue}>
            <button id="btn-view">View More</button>
            <br />
            <br />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopupSale;

//this should be made as unviewable unless user is logged in, and in that case should redirect to login page
