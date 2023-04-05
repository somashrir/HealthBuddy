import React from 'react'
    import { Link } from "react-router-dom";
    import styles from "./CSS/Chart.module.css";
    import Navbar from "./Navbar";
export const MedicineTracker = () => {
  return (
    <>
      <Navbar />
      {/* <div className={styles.heading}>
        Your Food diary is{"    "}
        <input type="date" className={styles.date} />
        <span className={styles.total}>Remaining calories: </span>
        <span className={styles.remCal}>1600</span>
      </div> */}
      {/* <div className={styles.heading2}>
        <span className={styles.rem}>Total calories consumed: </span>
        <span className={styles.remCal}>1600</span>
      </div> */}
      <table className={styles.table} id="diary-table">
        <colgroup>
          <col class="col-1" />
          <col class="col-2" />
          <col class="col-1" />
        </colgroup>

        <tbody>
          <tr class="meal_header">
            <td class="alt nutrient-column">
              <div class="subtitle"></div>
            </td>
          </tr>
          <tr class="meal_header">
            <td className={styles.header}>
              Morning
              <div className={styles.c}>
                <Link to="/calories" className={styles.addFood}>
                  Add Medicine
                </Link>
              </div>
            </td>
          </tr>
          <tr className={styles.foodItem}>
            <td>MedicineName</td>
            <td>
              <div className={styles.label}>
                Dose :{" "}
                <select
                  class={`${styles.dropdown} form-select`}
                  aria-label="Default select example"
                >
                  <option selected>1 tablet</option>
                  <option value="2">1 teaspoon</option>
                  <option value="2">Other</option>
                </select>
              </div>
            </td>

            <td>
              <button className={styles.delete}>Delete</button>
            </td>
          </tr>

          <tr class="meal_header">
            <td className={styles.header}>
              Afternoon
              <div className={styles.c}>
                <Link to="/calories" className={styles.addFood}>
                  Add Medicine
                </Link>
              </div>
            </td>
          </tr>
          <tr className={styles.foodItem}>
            <td>MedicineName</td>
            <td>
              <div className={styles.label}>
                Dose : {" "}
                <select
                  class={`${styles.dropdown} form-select`}
                  aria-label="Default select example"
                >
                  <option selected>1 tablet</option>
                  <option value="2">1 teaspoon</option>
                  <option value="2">Other</option>
                </select>{" "}
              </div>
            </td>

            <td>
              <button className={styles.delete}>Delete</button>
            </td>
          </tr>

          <tr class="meal_header">
            <td className={styles.header}>
              Night
              <div className={styles.c}>
                <Link to="/calories" className={styles.addFood}>
                  Add Medicine
                </Link>
              </div>
            </td>
          </tr>
          <tr className={styles.foodItem}>
            <td>MedicineName</td>
            <td>
              <div className={styles.label}>
                Dose :{" "}
                <select
                  class={`${styles.dropdown} form-select`}
                  aria-label="Default select example"
                >
                  <option selected>1 tablet</option>
                  <option value="2">1 teaspoon</option>
                  <option value="2">Other</option>
                </select>{" "}
              </div>
            </td>

            <td>
              <button className={styles.delete}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
