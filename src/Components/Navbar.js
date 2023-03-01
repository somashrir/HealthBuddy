import React from 'react'
import styles from '../Components/CSS/Login.module.css'
import Logo from '../Assets/download.jpeg'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
   <>

   <nav className={`navbar sticky-top navbar-expand-lg static-top ${styles.nav}`}>
  <div className="container">
    <a className={`${styles.logo}`} href="#">
      <img src={Logo} alt="..." height="56" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
     aria-expanded="false" aria-label="Toggle navigation">

      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
      <li className={`nav-item ${styles.li}`}>
          <a className={`nav-link active ${styles.navItem}`}  aria-current="page" href="#">Home</a>
        </li>
        <li className={`nav-item ${styles.li}`}>
          <a className={`nav-link active ${styles.navItem}`} aria-current="page" href="#">Food</a>
        </li>
        <li className={`nav-item ${styles.li}`}>
          <a className={`nav-link active ${styles.navItem}`}  href="#">Excercise</a>
        </li>
        <li className={`nav-item ${styles.li}`}>
          <a className={`nav-link active ${styles.navItem}`}  href="#">Blogs</a>
        </li>
        <li className={`nav-item ${styles.li}`}>
          <Link className={`nav-link active ${styles.navItem}`} to="/profile" >Profile</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar;