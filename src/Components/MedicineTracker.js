import React from 'react'
    import { Link } from "react-router-dom";
    import styles1 from "./CSS/medicine.module.css";
    import styles from "./CSS/Chart.module.css";
    import Navbar from "./Navbar";
    import {search} from '../Assets/search.png';
export const MedicineTracker = () => {
  return (
    <>
      <Navbar />
      <div className={styles1.medicine}>
        Add Medicine:{" "}
        <input
          type="text"
          className={styles1.search}
          placeholder="Search here"
        />
      </div>
      <div className={styles1.type}>
        Type:{" "}{" "}
        <select className={styles1.option}>
          <option>Tablet</option>
          <option>Syrup</option>
          <option>Ointment</option>
        </select>
      </div>
      <table className={styles.table}>
        <tbody>
          <tr class="meal_header">
            <td class="alt nutrient-column">
              <div class="subtitle"></div>
            </td>
          </tr>

          <tr className={styles.foodItem}>
            <td className={styles1.days}>Days </td>
            <td>
              <button className={styles1.button}>Mon</button>
            </td>
            <td>
              <button className={styles1.button}>Tues</button>
            </td>
            <td>
              <button className={styles1.button}>Wed</button>
            </td>
            <td>
              <button className={styles1.button}>Thurs</button>
            </td>
            <td>
              <button className={styles1.button}>Fri</button>
            </td>
            <td>
              {" "}
              <button className={styles1.button}>Sat</button>
            </td>
            <td>
              {" "}
              <button className={styles1.button}>Sun</button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className={styles.table}>
        <tbody>
          <tr class="meal_header">
            <td class="alt nutrient-column">
              <div class="subtitle"></div>
            </td>
          </tr>
          <tr className={styles.foodItem}>
            <td className={styles1.days}>Timings </td>
            <td>
              <button className={styles1.button}>Morning</button>
            </td>
            <td>
              <button className={styles1.button}>Afternoon</button>
            </td>
            <td>
              <button className={styles1.button}>Evening</button>
            </td>
            <td>
              <button className={styles1.button}>Night</button>
            </td>
          </tr>
        </tbody>
      </table>

        {/* <table className={styles.table}>
        <tbody>
          <tr class="meal_header">
            <td class="alt nutrient-column">
              <div class="subtitle"></div>
            </td>

            ////How to show data of medicine

          </tr></tbody></table> */}
    </>
  );
}
