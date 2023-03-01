import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../Components/CSS/Login.module.css";

const Login = () => {
  const [inputValues, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    email: "",
    password: "",
  });

  async function callAPI(data) {
    const res = await fetch("https://749b-125-20-24-2.in.ngrok.io", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
    });
    const data1 = await res.text();
    console.log(data1);

    return data1;
  }

  function handleSubmit(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let errors = validation;

    // email validation
    const email = inputValues.email;
    if (!inputValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      errors.email = "Invalid email address";
    } else {
      errors.email = "";
    }

    //password validation
    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if (/^^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      errors.password =
        "Password must contain capital letter, digit and length must be greater than 8";
    } else {
      errors.password = "";
    }

    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const obj = {};
    obj.email = inputValues.email;
    obj.password = inputValues.password;

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
                    <h3 className={`display-4 text-center ${styles.header}`}>
                      Login
                    </h3>
                    <form>
                      <div className="form-group ">
                        <label className={` text-large ${styles.label}`}>Email</label>
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
                          {<p className="text-danger">{validation.email}</p>}
                      </div>
                      
                      <div className="form-group">
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
                             {<p className="text-danger">{validation.password}</p>}
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
                          className="custom-control-label"
                        >
                          Remember password
                        </label>
                      </div>
                      <button
                        type="submit"
                        name="submit"
                        value="Sign In"
                        onClick={(e) => handleSubmit2(e)}
                        className={`btn-block text-uppercase mb-2 rounded-pill ${styles.submit}`}
                      >
                        Log in
                      </button>
                      <div className="mb-3">New user?<Link to='/Register'>Register</Link></div>
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
export default Login;
