import React from 'react'
import Navbar from './Navbar'
import styles from '../Components/CSS/Home.module.css'
import { Link } from 'react-router-dom'
import './CSS/button.css'

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className={`${styles.bgimage}`}>
        <div className={styles.welcome}>Welcome to HealthBuddy</div>
      </div>
      <div className="images">
        <div className="row">
          <div className="column">
            <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
            <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
          </div>
          <div className="column">
            <img src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
            <img src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />

            {/* <img src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" /> */}
          </div>
        </div>
        <div className="text">
          <p className="heading">Diet Flexibility and Fitness Freedom</p>
          <p className="para">
            With the right data, work with greater efficiency and,reach your fitness
            goals faster.
          </p>
        </div>
      </div>
    </>
  );
}
