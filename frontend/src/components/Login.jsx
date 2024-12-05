import React, { useState } from "react";
import "../stylesheets/Login.css";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { loginUser } from "../utils/APIs";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/User/userSlice";

const Login = ({ setLogin, setOpen }) => {
  const { user: x, accessToken: y } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, accessToken } = await loginUser(input);
      setErr("");
      dispatch(setUser({ user, accessToken }));
      alert("User logged in successfully!");
      setOpen(false);
    } catch (err) {
      setErr(err.message);
    }
  };

  console.log("User:", x);
  console.log("Token:", y);
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
