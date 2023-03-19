import React from 'react'
import Navbar from './Navbar'
import styles from '../Components/CSS/Home.module.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className={`${styles.bgimage}`}>
        <div className={styles.welcome}>Welcome to HealthBuddy</div>
      </div>
      <div className={styles.secondDiv}>
        Count Calories: Fast and Easy Food Tracking
        <div className={styles.button}>
          <button className={styles.btn}>
            <Link to="/calories" className={styles.link}>Count the calories</Link>
          </button>
        </div>
      </div>
    </>
  );
}
