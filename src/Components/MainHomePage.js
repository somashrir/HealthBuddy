import React from "react";
import image from "../Assets/LandingPage.avif";
import MainNavbar from './MainNavbar';
import {Link} from 'react-router-dom'
import styles from "../Components/CSS/Home.module.css";
import fact1 from '../Assets/fact1.png'
import fact2 from '../Assets/fact2.png';
import fact3 from '../Assets/fact3.png';
import fact4 from "../Assets/fact4.png";

export const HomePage = () => {
  return (
    <>
      <MainNavbar />
      <div className={`${styles.bgimage}`}>
        <div className={styles.welcome}>Welcome to HealthBuddy</div>
      </div>
      {/* <div className={styles.secondDiv}>
        Count Calories: Fast and Easy Food Tracking
        <div className={styles.button}>
          <button className={styles.btn}>Count the calories</button>
        </div>
      </div> */}
      <div className={styles.secondDiv}>
        Must-Know Fitness Facts: For A Fitter (And Healthier) You
      </div>
      <div class={styles.row}>
        <div class={styles.column}>
          <img src={fact1} width="200" className={styles.image} />
        </div>
        <div class={styles.column}>
          <img src={fact2} width="200" className={styles.image} />
        </div>
        <div class={styles.column}>
          <img src={fact3} width="200" className={styles.image} />
        </div>
        <div class={styles.column}>
          <img src={fact4} width="200" className={styles.image} />
        </div>
      </div>
      <div className={styles.secondDiv}>
        <Link to="/Login" className={styles.Link}>
          {" "}
          Login{" "}
        </Link>{" "}
        for more!!
      </div>
    </>
  );
};
