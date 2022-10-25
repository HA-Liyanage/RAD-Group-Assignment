import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <body>
      <form className="signup" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
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
            Sign up
          </button>
          {error && <div className="error">{error}</div>}
          {user && <Navigate to="/" />}
        </div>
      </form>
    </body>
  );
};

export default Signup;
