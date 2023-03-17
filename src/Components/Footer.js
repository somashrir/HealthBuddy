import React from "react";
import styles from './CSS/NavFooter.module.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.Box}>
      <div className={styles.Container}>
        <div className={styles.Row}>
          <div className={styles.Column}>
            <p className={styles.Heading}>Company Info</p>
            <Link to="#" className={styles.FooterLink}>
              About Us
            </Link>
            <Link to="#" className={styles.FooterLink}>
              Carrier
            </Link>
            <Link to="#" className={styles.FooterLink}>
              We are hiring
            </Link>
            <Link to="#" className={styles.FooterLink}>
              Blog
            </Link>
          </div>
          <div className={styles.Column}>
            <p className={styles.Heading}>Legal</p>
            <Link to="#" className={styles.FooterLink}>
              About Us
            </Link>
            <Link to="#" className={styles.FooterLink}>
              Carrier
            </Link>
            <Link to="#" className={styles.FooterLink}>
              We are hiring
            </Link>
            <Link to="#" className={styles.FooterLink}>
              Blog
            </Link>
          </div>
          <div className={styles.Column}>
            <p className={styles.Heading}>Features</p>
            <Link to="#" className={styles.FooterLink}>
              Business Marketing
            </Link>
            <Link to="#" className={styles.FooterLink}>
              User Analytic
            </Link>
            <Link to="#" className={styles.FooterLink}>
              Live Chat
            </Link>
            <Link to="#" className={styles.FooterLink}>
              Unlimited Support
            </Link>
          </div>
          <div className={styles.Column}>
            <p className={styles.Heading}>Resources</p>
            <Link to="#" className={styles.FooterLink}>
              IOS & Android
            </Link>
            <Link to="#" className={styles.FooterLink}>
              Watch a Demo
            </Link>
            <Link to="#" className={styles.FooterLink}>
              Customers
            </Link>
            <Link to="#" className={styles.FooterLink}>
              API
            </Link>
       </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
