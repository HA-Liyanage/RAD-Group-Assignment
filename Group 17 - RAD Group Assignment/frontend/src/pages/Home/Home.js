import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>LEADING MARKETPLACE FOR GAMERS</h1>

      <div className="Links">
        <div className="oneLink">
          <Link to="/accounts" style={{ textDecoration: "none" }}>
            <img src="https://icon-library.com/images/user-accounts-icon/user-accounts-icon-12.jpg"></img>
            <div className="texts">Accounts</div>
          </Link>
        </div>
        <div className="oneLink">
          <Link to="/rankups" style={{ textDecoration: "none" }}>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/gaming-level-up-4747470-3945737.png"></img>
            <div className="texts">Power Levelling</div>
          </Link>
        </div>
        <div className="oneLink">
          <Link to="/coaching" style={{ textDecoration: "none" }}>
            <img src="https://icon-library.com/images/coaching-icon-png/coaching-icon-png-17.jpg"></img>
            <div className="texts">Coaching</div>
          </Link>
        </div>
        <div className="oneLink">
          <Link to="/topups" style={{ textDecoration: "none" }}>
            <img src="https://cdn1.iconfinder.com/data/icons/gamer-outline-0519/64/top-up-joystick-game-512.png"></img>
            <div className="texts">Topups</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
