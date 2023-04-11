import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from "./CSS/Login.module.css";
import { Link, redirect, useNavigate } from "react-router-dom";
import LoginNavbar from "./MainNavbar";
import Login from './Login';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/v1/signup', { name: name, email: email, password: password })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        navigate('/Login');
        // redirect to home page or dashboard
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <LoginNavbar />
      <div className={styles.containerR}>
        <h1 className={styles.headerR}> Register your account</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className={styles.inputcontainer}>
              <div className={styles.label}>Name </div>
              <input
                className={styles.inputtext}
                placeholder="Enter your name"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputcontainer}>
              <div className={styles.label}>Email </div>
              <input
                className={styles.inputtext}
                placeholder="Enter your email"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputcontainer}>
              <div className={styles.label}>Password </div>
              <input
                className={styles.inputtext}
                placeholder="Enter your password"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputcontainer}>
              <div className={styles.label}>Confirm Password </div>
              <input
                className={styles.inputtext}
                placeholder="Enter your password"
                type="password"
                name="cPassword"
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
              Already registered?{' '}
              <Link to="/login" className={styles.link}>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
