import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from "./CSS/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import LoginNavbar from "./MainNavbar";
import Home  from "./Home";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .post('/api/v1/login', { email: email, password: password })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          
          localStorage.setItem('calorie_intake', response.data.calorie_intake);

          if (response.data.calorie_intake==null)
          {
            navigate('/profile')
          }
          else 
          {
            navigate('/Home');
          }
          // redirect to home page or dashboard
        })
        .catch((error) => console.log(error));
    };
  return (
    <>
      <LoginNavbar />
      <div className={`${styles.container} `}>
        <h1 className={`${styles.header}`}> Login</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className={styles.inputcontainer}>
              <div className={styles.label}>Email </div>
              <input
                className={styles.inputtext}
                placeholder="Enter your email"
                type="email"
                name="email"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              New User?
              <Link to="/Register" className={styles.link}>
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
