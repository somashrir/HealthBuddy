import React, { useState, useEffect } from 'react';
import styles from './CSS/calorie.module.css';
import calorie from '../Assets/calorie.png';
import Navbar from './Navbar';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';
import FoodChart from './FoodChart';

function Calorie() {
  const [user_id, setUser_id] = useState(null);
  const [query, setQuery] = useState('');
  const [quantity, setQuantity] = useState('');
  const [quantityType, setQuantityType] = useState('unit');
  const [calories, setCalories] = useState([]);
  const location = useLocation();
  const { type } = location.state;
  const { date } = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the token from local storage
    const token = localStorage.getItem('token');

    if (token) {
      // Decode the token to get the user_id
      const decodedToken = jwt_decode(token);
      const user_id = decodedToken.user_id;

      // Set the user_id in state
      setUser_id(user_id);
    }
  }, []);

  const handleClick = () => {
    // Make the API call with the user_id in headers
    axios
      .post(
        '/api/v1/calories',
        {
          query: query,
          user_id: user_id,
          food_type: type,
          date: date,
          quantity: quantity,
          quantityType: quantityType,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setCalories(response.data.foods);
        navigate('/FoodChart');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.mainCal}>
      <div className={styles.containerCal}>
        <div className={styles.headingCal}>
          <h1 className={styles.headCal}>What did you eat today?</h1>

            <img className={styles.img} src={calorie} />
          </div>

          <div className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter Food"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className={styles.quantityContainer}>
              <input
                className={styles.input}
                type="number"
                placeholder="Enter Quantity"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
              <select
                className={styles.select}
                value={quantityType}
                onChange={(event) => setQuantityType(event.target.value)}
              >
                <option value="unit">unit</option>
                <option value="ml">ml</option>
                <option value="gram">Gram</option>
              </select>
            </div>
            <button className={styles.button} onClick={handleClick}>
              <span className={styles.search}>Add Food</span>
            </button>
          </div>
        </div>
      </div>
 
  );
}

export default Calorie;
