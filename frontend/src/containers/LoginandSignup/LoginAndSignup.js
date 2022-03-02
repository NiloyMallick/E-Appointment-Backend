import React from "react";
import { Navigate } from "react-router-dom";
import "../LoginandSignup/LoginAndSignup.css";
import UseForm from "./UseForm";
import validate from "./ValidateInfo";

const LoginAndSignup = (props) => {
  console.log("==> props: ", props);
  const { handleChange, loginSubmit, signupSubmit, values, error } = UseForm(
    props,
    validate
  );
  console.log("===> loginsignup values: ", values);
  if (values.is_authenticated === true && values.group === "Employee") {
    console.log("===> employee home", values);
    return <Navigate to="/employeedashboard" />;
  } else if (values.is_authenticated === true && values.group === "Appointee") {
    console.log("===> appointee home", values);
    return <Navigate to="/appointeedashboard" />;
  } else if (values.is_authenticated === true && values.group === "Admin") {
    console.log("===> appointee home", values);
    return <Navigate to="/admindashboard" />;
  }
  console.log("====> reg-log: ", document.getElementById("reg-log"));

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-align-center">
                <h6 className="col 12 mb-0 pb-3 text-center">
                  <span>Log In</span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="loginCheckbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg_log"
                  value="login"
                />
                <label for="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <form className="card-front" onSubmit={loginSubmit}>
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>

                          <div className="form-group mt-2">
                            <input
                              id="email"
                              type="text"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              className="form-style"
                              placeholder="Your Email"
                              autocomplete="off"
                              required
                            />
                            <i className="input-icon uil uil-at"></i>
                            {error.email && (
                              <p data-tooltip="Invalid Email Address">
                                {error.email}
                              </p>
                            )}
                          </div>

                          <div className="form-group mt-2">
                            <input
                              id="loginPassword"
                              type="password"
                              name="loginPassword"
                              value={values.uloginPassword}
                              onChange={handleChange}
                              className="form-style"
                              placeholder="Your Password"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button className="submitButton mt-4" type="submit">
                            Log in
                          </button>
                          <p className="mb-0 mt-4 text-center">
                            <a className="signinLink" href="./reset-password">
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </form>

                    <form className="card-back" onSubmit={signupSubmit}>
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>

                          <div className="form-group">
                            <input
                              id="name"
                              type="text"
                              name="name"
                              value={values.name}
                              onChange={handleChange}
                              className="form-style"
                              placeholder="Your Full Name"
                              autocomplete="off"
                              required
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>

                          <div className="form-group mt-2">
                            <input
                              id="email"
                              type="text"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              className="form-style"
                              placeholder="Your Email"
                              autocomplete="off"
                              required
                            />
                            <i className="input-icon uil uil-at"></i>
                            {error.email && (
                              <p data-tooltip="Invalid Email Address">
                                {error.email}
                              </p>
                            )}
                          </div>

                          <div className="form-group mt-2">
                            <input
                              id="phoneno"
                              type="tel"
                              name="phoneno"
                              value={values.phoneno}
                              onChange={handleChange}
                              className="form-style"
                              placeholder="Your Phone No."
                              autocomplete="off"
                              required
                            />
                            <i className="input-icon uil uil-phone"></i>
                          </div>

                          <div className="form-group mt-2">
                            <input
                              id="signupPassword"
                              type="password"
                              name="signupPassword"
                              value={values.signupPassword}
                              onChange={handleChange}
                              className="form-style"
                              placeholder="Your Password"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-lock-open-alt"></i>
                          </div>

                          <div className="form-group mt-2">
                            <input
                              id="confirmPassword"
                              type="password"
                              name="confirmPassword"
                              value={values.confirmPassword}
                              onChange={handleChange}
                              className="form-style"
                              placeholder="Confirm Your Password"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                            {error.confirmPassword && (
                              <p data-tooltip="Passwords Dont Match">
                                {error.confirmPassword}
                              </p>
                            )}
                          </div>

                          <button className="submitButton mt-4" type="submit">
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSignup;
