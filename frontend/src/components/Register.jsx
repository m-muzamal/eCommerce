import React, { useState } from "react";
import "../stylesheets/Login.css";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { signupUser } from "../utils/APIs";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/User/userSlice";

const Register = ({ setLogin, setOpen }) => {
  const { user: x, accessToken: y } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const passwordValidate = () => {
    if (input.password === input.confirmPassword) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const validate = await passwordValidate();
      if (!validate) throw new Error("Confirm password should be same!");
      const { user, accessToken } = await signupUser(input);
      setErr("");
      dispatch(setUser({ user, accessToken }));
      alert("User Sign Up successfully!");
      setOpen(false);
    } catch (err) {
      setErr(err.message);
    }
  };
  
  console.log("User:", x)
  console.log("token:", y)
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
        <div className="password-input">
          <input
            type={visible ? "text" : "password"}
            placeholder="Confirm password"
            name="confirmPassword"
            value={input.confirmPassword}
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
