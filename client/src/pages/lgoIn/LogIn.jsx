import React from "react";
import "./logIn.scss";

const LogIn = () => {
  return (
    <div className="logIn">
      <section className="login" id="login">
        <div className="head">
          <a href="/" className="company">
            Programiz LogIn
          </a>
        </div>
        <p className="msg">Welcome back</p>
        <div className="form">
          <form>
            <input
              type="text"
              placeholder="Email"
              className="text"
              id="username"
              required
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="password"
            />
            <br />
            <a href="#" className="btn-login" id="do-login">
              Login
            </a>
            <a href="/signUp" className="signUp">
              SignUp
            </a>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
