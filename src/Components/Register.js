import React, { useState,useEffect } from "react";
import {Link}  from "react-router-dom";
import styles from '../Components/CSS/Login.module.css'
import { BASE_URL } from "../Components/Url";

export const Register = () => {
      const [inputValues, setInputValue] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
      });

      const [validation, setValidation] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
      });

      async function callAPI(data) {
        const res = await fetch(`${BASE_URL}/registration`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
          redirect: "follow",
        });
        if (res.status !== 200) {
          return;
        }
        const data1 = await res.json();
     
      }

      function handleSubmit(event) {
        const { name, value } = event.target;
        setInputValue({ ...inputValues, [name]: value });
      }

      const checkValidation = () => {
        let errors = validation;

        // email validation
        const email = inputValues.email;
        if (email.length > 0) {
          if (!inputValues.email.trim()) {
            errors.email = "Email is required";
          } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            errors.email = "Invalid email address";
          } else {
            errors.email = "";
          }
        }
        //password validation
        const password = inputValues.password;
        if (password.length) {
          if (!password) {
            errors.password = "password is required";
          } else if (/^^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            errors.password =
              "Password must contain capital letter, digit and length must be greater than 8";
          } else {
            errors.password = "";
          }
        }
        const cpassword = inputValues.cpassword;
        if (cpassword.length > 0) {
          if (!cpassword) {
            errors.cpassword = "Re-enter password";
          } else if (cpassword !== inputValues.password) {
            errors.cpassword = "Passwords does not match";
          } else {
            errors.cpassword = "";
          }
        }
      };
      useEffect(() => {
        checkValidation();
      }, [inputValues]);

      const handleSubmit2 = (e) => {
        e.preventDefault();
        const obj = {};
        obj.email = inputValues.email;
        obj.password = inputValues.password;
        obj.name = inputValues.name;

        console.log(obj);
        callAPI(obj);
      };



  return (
    <>
    
<div className="container-fluid">
        <div className="row no-gutter">
          <div className={`col-md-6 d-none d-md-flex ${styles.bgimage}`}></div>

          <div className="col-md-6 bg-light">
            <div className={` ${styles.login} d-flex align-items-right py-5 `}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className={`display-4 text-center ${styles.headerR}`}>
                      Register
                    </h3>
                    <form>
                    <div className="form-group">
                        <label className={`mb-3 text-large ${styles.label}`}>Name</label>
                        <input
                          id="inputName"
                          type="text"
                          placeholder="Your name"
                          required=""
                          name="name"
                          onChange={(e) => handleSubmit(e)}
                          value={inputValues.name ||""}
                          className="form-control rounded-pill border-0 shadow-sm px-4 mb-3"
                        />
                      
                      </div>
                      <div className="form-group ">
                        <label className={`mb-3 text-large ${styles.label}`}>Email</label>
                        <input
                          id="inputEmail"
                          type="email"
                          placeholder="Email address"
                          required=""
                          name="email"
                          onChange={(e) => handleSubmit(e)}
                          value={inputValues.email ||""}
                          className="form-control rounded-pill border-0 shadow-sm px-4 mb-3"
                        />
                          {/* {<p className="text-danger">{validation.email}</p>} */}
                      </div>
                      
                      <div className="form-group ">
                      <label className={`mb-3 text-large ${styles.label}`}>Password</label>
                      <input
                          id="inputPassword"
                          type="text"
                          placeholder="Password"
                          required=""
                          name="password"
                          onChange={(e) => handleSubmit(e)}
                          value={inputValues.password}
                          className="form-control rounded-pill border-0 shadow-sm px-4  mb-3" 
                        />
                             {/* {<p className="text-danger">{validation.password}</p>} */}
                      </div>
                      <div className="form-group ">
                      <label className={`mb-3 text-large ${styles.label}`}>Confirm Password</label>
                        <input
                          id="ConfirmPassword"
                          type="text"
                          placeholder="Re-enter your password"
                          required=""
                          name="password"
                          onChange={(e) => handleSubmit(e)}
                          value={inputValues.cPassword}
                          className="form-control rounded-pill border-0 shadow-sm px-4  mb-3" 
                        />
                             {/* {<p className="text-danger">{validation.cPassword}</p>} */}
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          id="customCheck1"
                          type="checkbox"
                          checked
                          className=" custom-control-input"
                        />
                        <label
                          for="customCheck1"
                          className="custom-control-label "
                        >
                          Remember password
                        </label>
                      </div>
                      <button
                        type="submit"
                        name="submit"
                        value="Sign In"
                      onClick={(e) => handleSubmit2(e)}
                        className={`btn-block text-uppercase mb-3 rounded-pill ${styles.submit}`}
                      >
                        Register
                      </button>

                      <div className="mb-3">Already registered? <Link to='/Login'>Login</Link></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
