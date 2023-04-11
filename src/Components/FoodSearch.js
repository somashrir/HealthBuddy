import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Navbar from './Navbar';
import axios from 'axios';
import styles1 from './CSS/medicine.module.css';

ChartJS.register(ArcElement, Tooltip);

export function FoodSearch({
  Calorie,
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
  color6,
}) {
  const [query, setQuery] = useState('');
  const [calorie, setCalorie] = useState(0);
  const [fat, setFat] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [foodName, setFoodName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/v1/foodSearch', { query: query })
      .then((response) => {
        setCalorie(response.data.calorie);
        setFat(response.data.fat);
        setSodium(response.data.sodium);
        setCarbs(response.data.carb);
        setProtein(response.data.protein);
        setSugar(response.data.sugar);
        setFoodName(response.data.name);
        
        // redirect to home page or dashboard
      })
      .catch((error) => console.log(error));
  };

  let data = {
    labels: ["Calorie", "Fat", "Sugar", "Carbs", "Protein", "Sodium"],
    datasets: [
      {
        data: [
          Calorie || calorie,
          Fat || fat,
          Sugar || sugar,
          Carbs || carbs,
          Protein || protein,
          Sodium || sodium,
        ],
        backgroundColor: [
          color1 || "#ffbe0b",
          color2 || "#fb5607",
          color3 || "#ff006e",
          color4 || "#3a86ff",
          color5 || "#8338ec",
          color6 || "#3a0ca3",
        ],
    borderWidth: 1,
      },
     ],
    };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className={styles1.medicine}>
          Search Food:{' '}
          <input
            type="text"
            className={styles1.search}
            placeholder="Search here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input type="file" multiple accept="image/*" />
        </div>
      </form>
      {console.log(calorie)}
      {calorie != 0 ? (
        <div className={styles1.chart}>
          <div className={styles1.details}>
            <div className={styles1.FoodName}>
              Your food details for {foodName}
            </div>
            <table className={styles1.table}>
              <tbody>
                <tr>
                  <td>calories</td>
                  <td>:</td>
                  <td>{calorie}</td>
                </tr>
                <tr>
                  <td>Fat</td>
                  <td>:</td>
                  <td>{fat}</td>
                </tr>
                <tr>
                  <td>Sugar</td>
                  <td>:</td>
                  <td>{sugar}</td>
                </tr>
                <tr>
                  <td>Carbs</td>
                  <td>:</td>
                  <td>{carbs}</td>
                </tr>
                <tr>
                  <td>Protein</td>
                  <td>:</td>
                  <td>{protein}</td>
                </tr>
                <tr>
                  <td>Sodium</td>
                  <td>:</td>
                  <td>{sodium}</td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className={styles1.piechart}>
        <Pie data={data} height="50px" width="50px" />
      </div>
    </>
  );
}
