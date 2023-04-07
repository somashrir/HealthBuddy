import React, { useState } from "react";
import styles from "./CSS/NavFooter.module.css";
import { Link } from "react-router-dom";
import logo from "../Assets/download.jpeg";

const LoginNavbar = () => {
  return (
    <>
      <div className={styles.nav}>
        <header>
          <div className={styles.inner}>
            <nav>
              <Link to="/" className={styles.logo}>
                <img src={logo} className={styles.cart}></img>
              </Link>
              <input type="checkbox" id="nav" />
              <label for="nav"></label>
              <ul>
                {/* <li>
                  <Link to="" className={styles.navLink}>
                    Blogs
                  </Link>
                </li> */}
                <li>
                  <Link to="/Login" className={styles.navLink}>
                    Login/
                  </Link>
                  <Link to="/Register" className={styles.navLink}>
                    Register
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default LoginNavbar;