import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CSS/Chart.module.css";
import Navbar from "./Navbar";
export const FoodChart = () => {

  return (
    <>
      <Navbar />
      <div className={styles.heading}>
        Your Food diary is{"    "}
        <input type="date" className={styles.date} />
        <span className={styles.total}>Remaining calories: </span>
        <span className={styles.remCal}>1600</span>
      </div>
      <div className={styles.heading2}>
        <span className={styles.rem}>Total calories consumed: </span>
        <span className={styles.remCal}>1600</span>
      </div>
      <table className={styles.table} id="diary-table">
        <colgroup>
          <col class="col-1" />
          <col class="col-1" />
          <col class="col-1" />
          <col class="col-1" />
          <col class="col-1" />
          <col class="col-1" />
          <col class="col-1" />
          <col class="col-1" />
        </colgroup>

        <tbody>
          <tr class="meal_header">
            <td class="alt nutrient-column">
              <div class="subtitle"></div>
            </td>
            <td className={styles.nutrientColumn}>
              Calories
              <div class="subtitle">kcal</div>
            </td>
            <td className={styles.nutrientColumn}>
              Carbs
              <div class="subtitle">g</div>
            </td>
            <td className={styles.nutrientColumn}>
              Fat
              <div class="subtitle">g</div>
            </td>
            <td className={styles.nutrientColumn}>
              Protein
              <div class="subtitle">g</div>
            </td>
            <td className={styles.nutrientColumn}>
              Sodium
              <div class="subtitle">mg</div>
            </td>
            <td className={styles.nutrientColumn}>
              Sugar
              <div class="subtitle">g</div>
            </td>
          </tr>
          <tr class="meal_header">
            <td className={styles.header}>
              Breakfast
              <div className={styles.c}>
                <Link to="/calories" className={styles.addFood}>
                  Add Food
                </Link>
              </div>
            </td>
          </tr>
          <tr className={styles.foodItem}>
            <td>Pizza</td>
            <td>150</td>
            <td>150</td>
            <td>150</td>
            <td>150</td>
            <td>150</td>
            <td>150</td>
            <td>
              <button className={styles.delete}>Delete</button>
            </td>
          </tr>

          <tr class="meal_header">
            <td className={styles.header}>
              Lunch
              <div className={styles.c}>
                <Link to="/calories" className={styles.addFood}>
                  Add Food
                </Link>
              </div>
            </td>
          </tr>
          <tr className={styles.foodItem}>
            <td>Pizza</td>
            <td>150</td>
            <td>150</td>
            <td>150</td>
            <td>150</td>
            <td>150</td>
            <td>150</td>
            <td>
              <button className={styles.delete}>Delete</button>
            </td>
          </tr>

          <tr class="meal_header">
            <td className={styles.header}>
              Dinner
              <div className={styles.c}>
                <Link to="/calories" className={styles.addFood}>
                  Add Food
                </Link>
              </div>
            </td>
          </tr>
          <tr className={styles.foodItem}>
            <td>Pizza</td>
            <td>150</td>
            <td>150</td>
            <td>150</td>
            <td>150</td>
            <td>150</td>
            <td>150</td>
            <td>
              <button className={styles.delete}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
