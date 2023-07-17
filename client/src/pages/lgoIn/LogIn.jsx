import React, { useState } from "react";
import "./logIn.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthData } from "../../store/slices/auth";
import spinner from "../../assets/images/spinner.gif";
import logo from "../../assets/images/logo.png";
import axios from "axios";
import toast from "react-hot-toast";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post(
      `https://online-compiler-server.vercel.app/api/v1/auth/login`,
      {
        email,
        password,
      }
    );

    try {
      if (res && res.data.success) {
        toast.success(res.data.message);
        setLoading(false);
        alert(res.data.message);
        dispatch(
          setAuthData({
            user: res.data.user,
            token: res.data.token,
          })
        );
        localStorage.setItem("auth_online_compiler", JSON.stringify(res.data));
        navigate("/");
      } else {
        setLoading(false);
        alert(res.data.message);
      }
    } catch (error) {
      toast.success(res.data.message);
      setLoading(false);
      alert(res.data.message);
    }
  };

  return (
    <div className="logIn">
      <section className="login" id="login">
        <div className="head">
          <Link to="/" className="company">
            <img src={logo} alt="logo" className="login_logo" />
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
        <p className="msg">Welcome back</p>
        <div className="form">
          <form>
            <input
              type="text"
              placeholder="Email"
              className="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button className="btn-login" id="do-login" onClick={handleLogin}>
              Login
            </button>
            <Link to="/signup" className="signUp">
              SignUp
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
