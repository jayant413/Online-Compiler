import React, { useState } from "react";
import "./signUp.scss";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:8080/api/v1/auth/signup`, {
      name,
      email,
      password,
    });

    try {
      if (res && res.data.success) {
        toast.success(res.data.message);
        alert(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.success(res.data.message);
      alert(res.data.message);
    }
  };

  return (
    <div className="signUp-area">
      <section className="signup" id="signup">
        <div className="head">
          <Link to="/" className="company">
            Programiz SignUp
          </Link>
        </div>
        <p className="msg">Welcome to Online Compiler</p>
        <div className="form">
          <form>
            <input
              type="text"
              placeholder="Username"
              className="text"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <br />
            <button
              className="btn-signup"
              id="do-signup"
              onClick={handleSignup}
            >
              SignUp
            </button>
            <Link to="/login" className="login">
              LogIn
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
