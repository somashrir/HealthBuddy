import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import Navbar from "./Navbar";
import styles1 from "./CSS/medicine.module.css";

ChartJS.register(ArcElement, Tooltip);

export function FoodSearch({
  Fat,
  Sodium,
  Carbs,
  Protein,
  Sugar,
  color1,
  color2,
  color3,
  color4,
  color5,
}) {
  let data = {
    labels: ["Fat", "Sugar", "Carbs", "Protein", "Sodium"],
    datasets: [
      {
        data: [
          Fat || 120,
          Sugar || 200,
          Carbs || 100,
          Protein || 30,
          Sodium || 90,
        ],
        backgroundColor: [
          color1 || "#ffbe0b",
          color2 || "#fb5607",
          color3 || "#ff006e",
          color4 || "#3a86ff",
          color5 || "#8338ec"
        ],

        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className={styles1.medicine}>
        Search Food:{" "}
        <input
          type="text"
          className={styles1.search}
          placeholder="Search here"
        />
        <input type="file" multiple accept="image/*" />
      </div>
      <div className={styles1.chart}>
        <div className={styles1.details}>
          <div className={styles1.FoodName}>Your food details for FoodName</div>
          <div className={styles1.data}>calories: 192 </div>
          <div className={styles1.data}>calories: 192 </div>
          <div className={styles1.data}>calories: 192 </div>
          <div className={styles1.data}>calories: 192 </div>
        </div>
      </div>

      <div className={styles1.piechart}>
        <Pie data={data} height="50px" width="50px"/>
      </div>
    </>
  );
}
