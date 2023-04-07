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
  color2,color3,color4,color5
}) {
  let data = {
    labels: ["Fat", "Sugar", "Carbs", "Protein", "Sodium"],
    datasets: [
      {
        data: [Fat || 120, Sugar || 200,Carbs || 100, Protein ||30,Sodium||90],
        backgroundColor: [
          color1 || "#D8F3DC",
          color2 || "#B7E4C7",
          color3 || "#95D5B2",
          color4 || "#74C69D",
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
      <div className={styles1.piechart}>
        <Pie data={data} />
      </div>
    </>
  );
}
