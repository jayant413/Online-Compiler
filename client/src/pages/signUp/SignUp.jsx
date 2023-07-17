import React, { useState } from "react";
import "./signUp.scss";
import axios from "axios";
import toast from "react-hot-toast";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import spinner from "../../assets/images/spinner.gif";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post(
      `https://online-compiler-server.vercel.app/api/v1/auth/signup`,
      {
        name,
        email,
        password,
      }
    );

    setLoading(false);
    try {
      if (res && res.data.success) {
        toast.success(res.data.message);
        alert(res.data.message);
        navigate("/login");
      } else {
        alert(res.data.message);
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
            <img src={logo} alt="logo" className="signup_logo" />
          </Link>
          <a
            href="https://online-compiler-by-js.vercel.app/"
            className="text-gray-400 hover:text-gray-200"
            target="_blank"
          >
            &copy; Cloned by Jayant
          </a>
        </div>
        {loading ? (
          <div className="w-[100%] flex justify-center">
            <img src={spinner} alt="spinner" className="h-[25px] " />
          </div>
        ) : (
          ""
        )}
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
