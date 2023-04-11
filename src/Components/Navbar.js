import React, { useState } from "react";
import styles from "./CSS/NavFooter.module.css";
import { Link } from "react-router-dom";
import logo from "../Assets/download.jpeg";

 const Navbar = () => {
  const handleLogout = () =>{
    
    localStorage.removeItem('token');
  }
  return (
    <>
      <div className={styles.nav}>
        <header>
          <div className={styles.inner}>
            <nav>
              <Link to="/Home" className={styles.logo}>
                <img src={logo} className={styles.cart}></img>
              </Link>
              <input type="checkbox" id="nav" />
              <label for="nav"></label>
              <ul>
                <li>
                  <Link to="/FoodSearch" className={styles.navLink}>
                    FoodSearch
                  </Link>
                </li>
                <li>
                  <Link to="/FoodChart" className={styles.navLink}>
                    Food
                  </Link>
                </li>
                <li>
                  <Link to="/Medicine" className={styles.navLink}>
                    MedicineTracker
                  </Link>
                </li>
                <li>
                  <Link to="/profiledetail" className={styles.navLink}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/Login" onClick={handleLogout} className={styles.navLink}>
                    Logout
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
export default Navbar;