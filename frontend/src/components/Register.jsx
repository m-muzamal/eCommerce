import React, { useState } from "react";
import "../stylesheets/Login.css";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Register = ({ setLogin }) => {
  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState("Somting went wrong!");
  const [input, setInput] = useState({
    name: "",
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
        <h1 className="title">Sign Up</h1>
        {err && <p className="error">{err}</p>}
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={input.name}
          onChange={handleChange}
          required
        />
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
        <button className="btn-primary">SIGN UP</button>
        <small>
          Already have an account?{" "}
          <a onClick={() => setLogin((prev) => !prev)}>Sign In</a>
        </small>
      </form>
    </section>
  );
};

export default Register;
