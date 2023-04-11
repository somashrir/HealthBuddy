import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import styles from '../Components/CSS/profile.module.css';
import jwt_decode from 'jwt-decode';
import { Link, useNavigate, useLocation } from 'react-router-dom';


const ProfileEdit = () => {
    const location = useLocation();
    // const height = location.state
  const [age, setAge] = useState(location.state.age);
  const [gender, setGender] = useState(location.state.gender);
  const [user_id, setUserId] = useState(location.state.user_id);
  const [height, setHeight] = useState(location.state.height);
  const [weight, setWeight] = useState(location.state.weight);
  const [activity_level, setActivityLevel] = useState(location.state.activity_level);
  const [goal_weight, setGoalWeight] = useState(location.state.goal_weight);
  const navigate = useNavigate();
  let value; 
  if (activity_level=="level_1"){
    value = 'Sedentary (little or no excercise)';
  }
  else if(activity_level=="level_2"){
    value = 'Lightly active (little excercise 1-3 days/week)';
  }
  else if(activity_level=="level_3"){
    value = 'Moderately active (moderate excercise 3-5 days/week)';
  }
  else if(activity_level=="level_4"){
    value = 'Very active (hard excercise 6-7 days/week)';
  }

  

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/v1/calCount', {
        age: age,
        gender: gender,
        height: height,
        weight: weight,
        activity_level: activity_level,
        goal_weight: goal_weight,
        user_id: user_id,
      })
      .then((response) => {
        // redirect to home page or dashboard
        localStorage.removeItem('calorie_intake');
        localStorage.setItem("calorie_intake",response.data.calorie_intake)
        navigate('/profiledetail');
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />
      <div className={styles.background}>
        <div className={`${styles.containerR}`}>
          <h1 className={`${styles.headerR}`}> Edit details</h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              {/* <div className={styles.inputcontainer}>
                <div className={styles.label}>Gender </div>
                <select
                  class={`${styles.dropdown} form-select`}
                  aria-label="Default select example"
                >
                  <option selected>Female</option>
                  <option value="2">Male</option>
                  <option value="2">Other</option>
                </select>
              </div> */}
              <div className={styles.inputcontainer}>
                <div className={styles.label}>Age</div>
                <input
                  className={styles.inputtext}
                  placeholder={age}
                  type="number"
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputcontainer}>
                <div className={styles.label}>Gender </div>
                <input
                  className={styles.inputtext}
                  placeholder={gender}
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputcontainer}>
                <div className={styles.label}>Height</div>
                <input
                  className={styles.inputtext}
                  placeholder={height}
                  name="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
              </div>

              <div className={styles.inputcontainer}>
                <div className={styles.label}>Weight </div>
                <input
                  className={styles.inputtext}
                  placeholder={weight}
                  type="number"
                  name="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputcontainer}>
                <div className={styles.label}>Goal Weight </div>
                <input
                  className={styles.inputtext}
                  placeholder={goal_weight}
                  type="number"
                  name="goal_weight"
                  value={goal_weight}
                  onChange={(e) => setGoalWeight(e.target.value)}
                  required
                />
              </div>

              <div className={styles.inputcontainer}>
                <div className={styles.label}>Activity Level </div>
                <select
                  class={`${styles.dropdown} form-select`}
                  aria-label="Default select example"
                  defaultValue={value}
                  name="activity_level"
                  value={activity_level}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  required
                >
                  <option selected>Activity Level</option>
                  <option value="level_1">
                    Sedentary (little or no excercise)
                  </option>
                  <option value="level_2">
                    Lightly active (little excercise 1-3 days/week)
                  </option>
                  <option value="level_3">
                    Moderately active (moderate excercise 3-5 days/week)
                  </option>
                  <option value="level_4">
                    Very active (hard excercise 6-7 days/week)
                  </option>
                </select>
              </div>
              <input
                type="submit"
                name="Edit"
                className={styles.inputsubmit}
                value="Edit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileEdit;
