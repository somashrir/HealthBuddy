import React from 'react'
import image from '../Assets/LandingPage.avif'
import Navbar from './Navbar'
import styles from '../Components/CSS/Home.module.css'
export const Home = () => {
  return (
    <>
<div className="container-fluid">
        <div className="row no-gutter">
          <div className={`${styles.bgimage}`}>
            <div className={` ${styles.welcome}`}>Welcome to HealthBuddy</div>
            </div>
        
          </div>
         
          </div>
    </>
  )
}
