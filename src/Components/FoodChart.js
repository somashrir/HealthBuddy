import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./CSS/Chart.module.css";
import Navbar from "./Navbar";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';


export const FoodChart = () => {
  const [breakfast, setBreakFast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [total_intake, setTotalIntake] = useState(0);
  // const [remaining_intake, setRemainingIntake] = useState(0);
  const [req_intake, setReqIntake] = useState(0);

  const [user_id, setUser_id] = useState(null);
  const navigate = useNavigate();
  // const now = new Date();
  // const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  // const [selectedDate, setSelectedDate] = useState(today);
  // console.log(selectedDate)
  // let d = selectedDate == today ? 'current_date' : selectedDate;
  // console.log(d)
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const todayDate = `${year}-${month}-${day}`;
  const [selectedDate, setSelectedDate] = useState(todayDate);
  // console.log(selectedDate)
  // let d = selectedDate == todayDate ? 'current_date' : selectedDate;

  useEffect(() => {
    // console.log("start*************************")
    const token = localStorage.getItem('token');
    const calorie_intake = localStorage.getItem('calorie_intake');
    console.log('calorie_intake')
    console.log(calorie_intake)
    // console.log(token)
    const decodedToken = jwt_decode(token);
    const user_id = decodedToken.user_id;

    // Set the user_id in state
    setUser_id(user_id);
    setReqIntake(calorie_intake);
    console.log('--------------------------');
    console.log(req_intake);

    axios
      .post(
        'api/v1/index',
        {
          user_id: user_id,
          selectedDate: selectedDate,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => {
        setBreakFast(response.data.breakfast);
        setLunch(response.data.lunch);
        setDinner(response.data.dinner);
        setTotalIntake(response.data.total_intake);

        // setRemainingIntake(response.data.remaining_intake);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedDate]);
  const handleDelete = (id) => () => {
    axios
      .post(
        '/api/v1/destroy',
        {
          id: id,
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
  };
  return (
    <>
      <Navbar />
      <div className={styles.heading}>
        Your Food diary is{'    '}
        <input
          type="date"
          className={styles.date}
          onChange={(e) => setSelectedDate(e.target.value)}
          value={selectedDate || '/'}
        />
        <span className={styles.total}>Remaining calories: </span>
        <span className={styles.remCal}>
          {(req_intake - total_intake).toFixed(2)}/
          <span className={styles.totalCal}>{req_intake}</span>
        </span>
      </div>
      <div className={styles.heading2}>
        <span className={styles.rem}>Total calories consumed: </span>
        <span className={styles.totalIntake}>{total_intake}</span>
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
          <col class="col-1" />
        </colgroup>

        <tbody>
          <tr class="meal_header">
            <td class="alt nutrient-column">
              <div class="subtitle"></div>
            </td>
            <td className={styles.nutrientColumn}>
              Quantity
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
                <Link
                  to={'/calories'}
                  state={{ type: 'breakfast', date: selectedDate }}
                  className={styles.addFood}
                >
                  Add Food
                </Link>
              </div>
            </td>
          </tr>
          {breakfast
            .filter(
              (item) =>
                JSON.stringify(
                  new Date(
                    new Date(selectedDate).getFullYear(),
                    new Date(selectedDate).getMonth() + 1,
                    new Date(selectedDate).getDate()
                  )
                ) ==
                JSON.stringify(
                  new Date(
                    new Date(item.created_at).getFullYear(),
                    new Date(item.created_at).getMonth() + 1,
                    new Date(item.created_at).getDate()
                  )
                )
            )
            .map((food) => {
              return (
                <tr className={styles.foodItem}>
                  <td>{food.name}</td>
                  <td>
                    {food.quantity}
                    {food.quantity_type}
                  </td>
                  <td>{food.calorie}</td>
                  <td>{food.carb}</td>
                  <td>{food.fat}</td>
                  <td>{food.protein}</td>
                  <td>{food.sodium}</td>
                  <td>{food.suger}</td>
                  <td>
                    <button
                      className={styles.delete}
                      onClick={handleDelete(food.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}

          <tr class="meal_header">
            <td className={styles.header}>
              Lunch
              <div className={styles.c}>
                <Link
                  to={'/calories'}
                  state={{ type: 'lunch', date: selectedDate }}
                  className={styles.addFood}
                >
                  Add Food
                </Link>
              </div>
            </td>
          </tr>
          {lunch
            .filter(
              (item) =>
                JSON.stringify(
                  new Date(
                    new Date(selectedDate).getFullYear(),
                    new Date(selectedDate).getMonth() + 1,
                    new Date(selectedDate).getDate()
                  )
                ) ==
                JSON.stringify(
                  new Date(
                    new Date(item.created_at).getFullYear(),
                    new Date(item.created_at).getMonth() + 1,
                    new Date(item.created_at).getDate()
                  )
                )
            )
            .map((food) => {
              return (
                <tr className={styles.foodItem}>
                  <td>{food.name}</td>
                  <td>
                    {food.quantity}
                    {food.quantity_type}
                  </td>
                  <td>{food.calorie}</td>
                  <td>{food.carb}</td>
                  <td>{food.fat}</td>
                  <td>{food.protein}</td>
                  <td>{food.sodium}</td>
                  <td>{food.suger}</td>
                  <td>
                    <button
                      className={styles.delete}
                      onClick={handleDelete(food.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}

          <tr class="meal_header">
            <td className={styles.header}>
              Dinner
              <div className={styles.c}>
                <Link
                  to={'/calories'}
                  state={{ type: 'dinner', date: selectedDate }}
                  className={styles.addFood}
                >
                  Add Food
                </Link>
              </div>
            </td>
          </tr>
          {dinner
            .filter(
              (item) =>
                JSON.stringify(
                  new Date(
                    new Date(selectedDate).getFullYear(),
                    new Date(selectedDate).getMonth() + 1,
                    new Date(selectedDate).getDate()
                  )
                ) ==
                JSON.stringify(
                  new Date(
                    new Date(item.created_at).getFullYear(),
                    new Date(item.created_at).getMonth() + 1,
                    new Date(item.created_at).getDate()
                  )
                )
            )
            .map((food) => {
              return (
                <tr className={styles.foodItem}>
                  <td>{food.name}</td>
                  <td>
                    {food.quantity}
                    {food.quantity_type}
                  </td>
                  <td>{food.calorie}</td>
                  <td>{food.carb}</td>
                  <td>{food.fat}</td>
                  <td>{food.protein}</td>
                  <td>{food.sodium}</td>
                  <td>{food.suger}</td>
                  <td>
                    <button
                      className={styles.delete}
                      onClick={handleDelete(food.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
