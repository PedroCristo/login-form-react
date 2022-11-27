import React from "react";

const FormSignup = () => {
  return (
    <div className="form-content-right">
      <form className="form" noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className="form-inputs">
          <label htmlName="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-inputs">
          <label htmlName="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            className="form-label"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-inputs">
          <label htmlName="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-inputs">
          <label htmlName="password2" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
          />
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
