import React, { useState } from 'react';
import styles from './CSS/calorie.module.css';
import calorie from '../Assets/calorie.png';
import Navbar from './Navbar';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


function Calorie() {
    const [user_id, setUser_id] = useState(null);
    const [query, setQuery] = useState('');
    const [calories, setCalories] = useState([]);

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
            /* request payload */
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              user_id: user_id,
              query: query,

            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    };
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h1 className={styles.head}>What did you eat today?</h1>

            <img className={styles.img} src={calorie} />
          </div>
          <h1>Total Calories= cal </h1>
          <div className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter Food"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button className={styles.button} onClick={handleClick}>
              <span className={styles.search}>Search</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calorie;
