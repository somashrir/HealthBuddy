import React, { useState, useEffect } from "react";
import styles from "./CSS/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import LoginNavbar from "./MainNavbar";

const Register = () => {
  return (
    <>
      <LoginNavbar />
      <div className={styles.containerR}>
        <h1 className={styles.headerR}> Register your account</h1>
        <div className="form">
          <form>
            <div className={styles.inputcontainer}>
              <div className={styles.label}>Name </div>
              <input
                className={styles.inputtext}
                placeholder="Enter your name"
                type="text"
                name="name"
                required
              />
            </div>

            <div className={styles.inputcontainer}>
              <div className={styles.label}>Email </div>
              <input
                className={styles.inputtext}
                placeholder="Enter your email"
                type="email"
                name="email"
                required
              />
            </div>

            <div className={styles.inputcontainer}>
              <div className={styles.label}>Password </div>
              <input
                className={styles.inputtext}
                placeholder="Enter your password"
                type="text"
                name="password"
                required
              />
            </div>
            <div className={styles.inputcontainer}>
              <div className={styles.label}>Confirm Password </div>
              <input
                className={styles.inputtext}
                placeholder="Enter your password"
                type="text"
                name="cPassword"
                required
              />
            </div>
            <input
              type="submit"
              name="submit"
              className={styles.inputsubmit}
              value="Sign In"
            />
            <div className={styles.already}>
              Already registered?{" "}
              <Link to="/login" className={styles.link}>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
