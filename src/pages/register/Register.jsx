import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  const handleLogin = () => {};
  return (
    <div className="register ">
      <div className="card">
        <div className="left">
          <h2> Jay's Social</h2>
          <p>
            Lorem ipsum dolor sit amet. Et assumenda error est internos unde rem
            autem quisquam non velit necessitatibus.
          </p>
          <span>Do you have a account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />

            <button onClick={handleLogin}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
