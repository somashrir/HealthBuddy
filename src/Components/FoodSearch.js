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
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/v1/foodSearch', { query: query })
      .then((response) => {
        setCalorie(response.data.calorie);
        setFat(response.data.fat);
        setSodium(response.data.sodium);
        setCarbs(response.data.carbs);
        setProtein(response.data.protein);
        setSugar(response.data.sugar);
        // redirect to home page or dashboard
      })
      .catch((error) => console.log(error));
  };

  let data = {
    labels: ['Calorie', 'Fat', 'Sugar', 'Carbs', 'Protein', 'Sodium'],
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
          color1 || '#D8F3DC',
          color2 || '#B7E4C7',
          color3 || '#95D5B2',
          color4 || '#74C69D',
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
            onChange={(event) => setQuery(event.target.value)}
          />
          <input type="file" multiple accept="image/*" />
        </div>
      </form>
      <div className={styles1.piechart}>
        <Pie data={data} />
      </div>
    </>
  );
}
