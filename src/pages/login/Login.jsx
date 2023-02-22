import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import LoggedIn from "./LoggedIn";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext); //This will get connected in the backend later

  const handleLogin = () => {
    login();
    <LoggedIn />;
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h2> Hello World</h2>
          <p>
            Lorem ipsum dolor sit amet. Et assumenda error est internos unde rem
            autem quisquam non velit necessitatibus.
          </p>
          <span>Don't you have a account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
