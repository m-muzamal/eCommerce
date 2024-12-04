import React, { useState } from "react";
import "../stylesheets/Login.css";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Login = ({ setLogin }) => {
  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState("Somting went wrong!");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <section className="container login-section">
      <form onSubmit={handleSubmit}>
        <h1 className="title">Sign In</h1>
        {err && <p className="error">{err}</p>}
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <div className="password-input">
          <input
            type={visible ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={input.password}
            required
            onChange={handleChange}
          />
          <span>
            {visible ? (
              <IoIosEyeOff onClick={() => setVisible(!visible)} />
            ) : (
              <IoIosEye onClick={() => setVisible(!visible)} />
            )}
          </span>
        </div>
        <button className="btn-primary">SIGN IN</button>
        <small>
          Don't have account?{" "}
          <a onClick={() => setLogin((prev) => !prev)}>Sign Up</a>
        </small>
      </form>
    </section>
  );
};

export default Login;
