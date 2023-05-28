import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import styles from '../Components/CSS/profile.module.css';
import jwt_decode from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [user_id, setUserId] = useState('');
  const [height, setHeight] = useState(0.0)
  const [weight, setWeight] = useState(0.0)
  const [activity_level, setActivityLevel] = useState('')
  const [goal_weight, setGoalWeight] = useState(0.0)
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the token from local storage
    const token = localStorage.getItem('token');

    if (token) {
      // Decode the token to get the user_id
      const decodedToken = jwt_decode(token);
      const user_id = decodedToken.user_id;

      // Set the user_id in state
      setUserId(user_id);
    }
  }, []);

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
          user_id: user_id
        })
        .then((response) => {
          // redirect to home page or dashboard
          localStorage.setItem('calorie_intake',response.data.calorie_intake)
          navigate('/Home')
        })
        .catch((error) => console.log(error));
    };  

  return (
    <>
      <Navbar />
      <div className={styles.background}>
        <div className={`${styles.containerR}`}>
          <h1 className={`${styles.headerR}`}> Fill details</h1>
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
                  placeholder="Enter your age"
                  type="number"
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputcontainer}>
                <div className={styles.label}>Gender</div>
                <select
                  className={styles.inputtext}
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className={styles.inputcontainer}>
                <div className={styles.label}>Height</div>
                <input
                  className={styles.inputtext}
                  placeholder="Enter your height"
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
                  placeholder="Enter your weight"
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
                  placeholder="Enter your goal weight"
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
                name="submit"
                className={styles.inputsubmit}
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
