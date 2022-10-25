import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <header>
      <div className="container">
        <div className="logo-header">
          <Link to="/" style={{ textDecoration: "none" }}>
            Game Auction
          </Link>
        </div>
        <nav>
          {user && (
            <div>
              <span id="email">
                {user.email}
                <button onClick={handleClick} id="btn-logout">
                  Log out
                </button>
              </span>
              <br />
              <br />

              <div className="nav-header">
                <ul>
                  <li>
                    <Link to="/dashboard">Topup Orders</Link>{" "}
                  </li>
                  <li>
                    <Link to="/rankDashboard">Rankup Orders</Link>{" "}
                  </li>
                  <li>
                    <Link to="/coachDashboard">Coaching Orders</Link>{" "}
                  </li>
                  <li>
                    <Link to="/accountDashboard">Account Orders</Link>
                  </li>
                  <li>
                    <Link to="/reports">Reports</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {!user && (
            <div className="nav-header">
              <Link to="/signup">Signup</Link>
              <Link to="/login">
                <button id="log">Login</button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
