import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import "../css/index.css";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);

    //await navigate("/");
  };

  return (
    <body>
      <form id="login" className="login" onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="text">
          <label>Email address:</label> <br />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="Uname"
          />{" "}
          <br />
          <br />
          <label>Password:</label> <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="Pass"
          />{" "}
          <br />
          <br />
          <br />
          <button disabled={isLoading} id="btnlog">
            Log in
          </button>
          {error && <div className="error">{error}</div>}
          {user && <Navigate to="/" />}
        </div>
      </form>
    </body>
  );
};

export default Login;
