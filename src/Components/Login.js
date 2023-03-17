import React, { useState, useEffect } from "react";
import styles from "./CSS/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import LoginNavbar from "./MainNavbar";
import { Home } from "./Home";
const Login = () => {
  return (
    <>
      <LoginNavbar />
      <div className={`${styles.container} `}>
        <h1 className={`${styles.header}`}> Login</h1>
        <div className="form">
          <form>
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

            <input
              type="submit"
              name="submit"
              className={styles.inputsubmit}
              value="Sign In"
            />

            <div className={styles.already}>
              New User?
              <Link to="/Register" className={styles.link}>
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
