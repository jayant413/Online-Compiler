import React from "react";
import "./signUP.scss";

const SignUp = () => {
  return (
    <div className="signUp-area">
      <section className="signup" id="signup">
        <div className="head">
          <a href="/" className="company">
            Programiz SignUp
          </a>
        </div>
        <p className="msg">Welcome back</p>
        <div className="form">
          <form>
            <input
              type="text"
              placeholder="Username"
              className="text"
              id="username"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="password"
              required
            />

            <br />
            <a href="#" className="btn-signup" id="do-signup">
              SignUp
            </a>
            <a href="/logIn" className="login">
              LogIn
            </a>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
