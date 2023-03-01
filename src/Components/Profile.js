import React from 'react'
import styles from "../Components/CSS/profile.module.css";





const Profile = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={`${styles.containerR}`}>
          <h1 className={`${styles.headerR}`}> Fill details</h1>
          <div className="form">
            <form>
              <div className={styles.inputcontainer}>
                <div className={styles.label}>Age </div>
                <input
                  className={styles.inputtext}
                  placeholder="Enter your age"
                  type="number"
                  name="age"
                  required
                />
              </div>
              <div className={styles.inputcontainer}>
                <div className={styles.label}>Height</div>
                <input
                  className={styles.inputtext}
                  placeholder="Enter your height"
                  name="number"
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
                  required
                />
              </div>

              <div className={styles.inputcontainer}>
                <div className={styles.label}>Activity Level </div>
                <select
                  class={`${styles.dropdown} form-select`}
                  aria-label="Default select example"
                >
                  <option selected>Activity Level</option>
                  <option value="1">Sedentary (little or no excercise)</option>
                  <option value="2">
                    Lightly active (little excercise 1-3 days/week)
                  </option>
                  <option value="3">
                    Moderately active (moderate excercise 3-5 days/week)
                  </option>
                  <option value="3">
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
}
export default Profile;
