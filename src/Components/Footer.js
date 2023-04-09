import React from "react";
import styles from './CSS/NavFooter.module.css';
import { Link } from "react-router-dom";
import icon from '../Assets/linkedin.png'
const Footer = () => {
  return (
    <div className={styles.Box}>
      <div className={styles.Container}>
        <div className={styles.Row}>
          <div className={styles.Column}>
            <p className={styles.Heading}>Quick Links</p>
            <Link to="/calories" className={styles.FooterLink}>
              Calorie Counter
            </Link>
            <Link to="/FoodSearch" className={styles.FooterLink}>
              Food Search
            </Link>
            <Link to="/Medicine" className={styles.FooterLink}>
              Medicine Tracker
            </Link>
            <Link to="/profiledetail" className={styles.FooterLink}>
              Profile
            </Link>
          </div>
          <div className={styles.Column}>
            <p className={styles.Heading}>Someshwar</p>
            <Link to="#" className={styles.FooterLinkEmail}>
              <i class="fa fa-envelope"></i> someshwar@gmail.com
            </Link>
            <Link to="#" className={styles.FooterLink}>
              <i class="fa fa-phone"></i> 94539161929
            </Link>
            <Link to="https://www.linkedin.com/" className={styles.FooterLink}>
              <img src={icon} /> LinkedIn
            </Link>
            <Link to="#" className={styles.FooterLink}>
              ABESEC
            </Link>
          </div>
          <div className={styles.Column}>
            <p className={styles.Heading}>Somashri</p>
            <Link to="#" className={styles.FooterLinkEmail}>
              <i class="fa fa-envelope"></i> somashri@gmail.com
            </Link>
            <Link to="#" className={styles.FooterLink}>
              <i class="fa fa-phone"></i> 9453196190
            </Link>
            <Link to="https://www.linkedin.com/" className={styles.FooterLink}>
              <img src={icon} /> LinkedIn
            </Link>
            <Link to="#" className={styles.FooterLink}>
              ABESEC
            </Link>
          </div>
          <div className={styles.Column}>
            <p className={styles.Heading}>Ritika</p>
            <Link to="#" className={styles.FooterLinkEmail}>
              <i class="fa fa-envelope"></i> ritika@gmail.com
            </Link>
            <Link to="#" className={styles.FooterLink}>
              <i class="fa fa-phone"></i> 9453918929
            </Link>
            <Link to="https://www.linkedin.com/" className={styles.FooterLink}>
              <img src={icon} />
              LinkedIn
            </Link>
            <Link to="#" className={styles.FooterLink}>
              ABESEC
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
