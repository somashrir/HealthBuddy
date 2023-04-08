// import React from 'react'
//     import { Link } from "react-router-dom";
//     import styles1 from "./CSS/medicine.module.css";
//     import styles from "./CSS/Chart.module.css";
//     import Navbar from "./Navbar";
//     import {search} from '../Assets/search.png';
// export const MedicineTracker = () => {
//   return (
//     <>
//       <Navbar />
//       <div className={styles1.medicine}>
//         Add Medicine:{" "}
//         <input
//           type="text"
//           className={styles1.search}
//           placeholder="Search here"
//         />
//       </div>
//       <div className={styles1.type}>
//         Type:{" "}{" "}
//         <select className={styles1.option}>
//           <option>Tablet</option>
//           <option>Syrup</option>
//           <option>Ointment</option>
//         </select>
//       </div>
//       <table className={styles.table}>
//         <tbody>
//           <tr class="meal_header">
//             <td class="alt nutrient-column">
//               <div class="subtitle"></div>
//             </td>
//           </tr>

//           <tr className={styles.foodItem}>
//             <td className={styles1.days}>Days </td>
//             <td>
//               <button className={styles1.button}>Mon</button>
//             </td>
//             <td>
//               <button className={styles1.button}>Tues</button>
//             </td>
//             <td>
//               <button className={styles1.button}>Wed</button>
//             </td>
//             <td>
//               <button className={styles1.button}>Thurs</button>
//             </td>
//             <td>
//               <button className={styles1.button}>Fri</button>
//             </td>
//             <td>
//               {" "}
//               <button className={styles1.button}>Sat</button>
//             </td>
//             <td>
//               {" "}
//               <button className={styles1.button}>Sun</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <table className={styles.table}>
//         <tbody>
//           <tr class="meal_header">
//             <td class="alt nutrient-column">
//               <div class="subtitle"></div>
//             </td>
//           </tr>
//           <tr className={styles.foodItem}>
//             <td className={styles1.days}>Timings </td>
//             <td>
//               <button className={styles1.button}>Morning</button>
//             </td>
//             <td>
//               <button className={styles1.button}>Afternoon</button>
//             </td>
//             <td>
//               <button className={styles1.button}>Evening</button>
//             </td>
//             <td>
//               <button className={styles1.button}>Night</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//         {/* <table className={styles.table}>
//         <tbody>
//           <tr class="meal_header">
//             <td class="alt nutrient-column">
//               <div class="subtitle"></div>
//             </td>

//             ////How to show data of medicine

//           </tr></tbody></table> */}
//     </>
//   );
// }

import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import styles1 from "./CSS/medicine.module.css";
import styles from "./CSS/Chart.module.css";
import Navbar from "./Navbar";
import search from '../Assets/search.png';
import axios from 'axios';

export const MedicineTracker = () => {

  const [medicineName, setMedicineName] = useState('');
  const [medicineType, setMedicineType] = useState('Tablet');
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimings, setSelectedTimings] = useState([]);
  const [morningMed, setMorningMed] = useState([]);
  const [afternoonMed, setAfternoonMed] = useState([]);
  const [eveningMed, setEveningMed] = useState([]);
  const [nightMed, setNightMed] = useState([]);

  
      useEffect(() => {
        axios
          .post(
            'api/v1/medShow',
            {
              token: localStorage.getItem('token'),
              
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            }
          )
          .then((response) => {
            console.log(response.data.morning_med);
            setMorningMed(response.data.morning_med);
            setAfternoonMed(response.data.afternoon_med);
            setEveningMed(response.data.evening_med);
            setNightMed(response.data.night_med);
            // setRemainingIntake(response.data.remaining_intake);
          })
          .catch((error) => {
            console.log(error);
          })
        },[]);

  const handleDayClick = (day) => {
   
    if (!selectedDays.includes(day)) {
      // setSelectedDays(selectedDays.filter((d) => d !== day));
      setSelectedDays([...selectedDays, day]);
      console.log(selectedDays);
    }
    // } else {
  };

  const handleTimingClick = (timing) => {
    
    if (!selectedTimings.includes(timing)) {
      // setSelectedTimings(selectedTimings.filter((t) => t !== timing));
      setSelectedTimings([...selectedTimings, timing]);
      console.log(selectedTimings)
    } 
    // else {
      
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(selectedDays)
    // console.log(selectedTimings)
    // console.log(medicineName)
    axios
      .post(
        '/api/v1/createMed',
        {
          medicineName: medicineName,
          medicineType: medicineType,
          selectedDays: selectedDays,
          selectedTimings: selectedTimings,
          token: localStorage.getItem('token'),
        },

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => {
        window.location.reload(true);
      })
      .catch((error) => console.log(error));
      setSelectedDays([])
      setSelectedTimings([])
    // Submit selectedDays and selectedTimings to your backend
  }

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className={styles1.medicine}>
          Add Medicine:{' '}
          <input
            type="text"
            className={styles1.search}
            placeholder="Search here"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
          />
        </div>
        <div className={styles1.type}>
          Type:{' '}
          <select
            className={styles1.option}
            value={medicineType}
            onChange={(e) => setMedicineType(e.target.value)}
          >
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
                <button
                  type="button"
                  className={styles1.button}
                  onClick={() => handleDayClick('mon')}
                >
                  Mon
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className={styles1.button}
                  onClick={() => handleDayClick('tues')}
                >
                  Tues
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className={styles1.button}
                  onClick={() => handleDayClick('wed')}
                >
                  Wed
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className={styles1.button}
                  onClick={() => handleDayClick('thurs')}
                >
                  Thurs
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className={styles1.button}
                  onClick={() => handleDayClick('fri')}
                >
                  Fri
                </button>
              </td>
              <td>
                {' '}
                <button
                  type="button"
                  className={styles1.button}
                  onClick={() => handleDayClick('sat')}
                >
                  Sat
                </button>
              </td>
              <td>
                {' '}
                <button
                  type="button"
                  className={styles1.button}
                  onClick={() => handleDayClick('sun')}
                >
                  Sun
                </button>
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
                <button
                  type="button"
                  className={styles1.button}
                  onClick={() => handleTimingClick('morning')}
                >
                  Morning
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className={styles1.button}
                  onClick={() => handleTimingClick('afternoon')}
                >
                  Afternoon
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className={styles1.button}
                  onClick={() => handleTimingClick('evening')}
                >
                  Evening
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className={styles1.button}
                  onClick={() => handleTimingClick('night')}
                >
                  Night
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" name="submit" value="Add" />
      </form>
    </>
  );
            }