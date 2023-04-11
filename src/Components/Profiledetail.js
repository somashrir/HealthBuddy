import React,{useEffect, useState} from 'react'
import styles from './CSS/profile.module.css'
import './CSS/button.css'
import {Link} from 'react-router-dom'
import avatar from '../Assets/avatar.png'
import Navbar from './Navbar';
import axios from 'axios';
export const Profiledetail = () => {

      const [user, setUser] = useState([]);
      
      

      useEffect(() => {
        
        axios
          .post('/api/v1/profileShow', { token: localStorage.getItem('token') })
          .then((response) => {
            setUser(response.data.user)
            console.log(user)
            
          })
          .catch((error) => console.log(error));
      
      }, []);
  return (
    <>
      <Navbar />
      <div class="main">
        <h2>Profile Details</h2>
        <div class="card">
          <div class="card-body">
            <div className="profile">
              <img src={avatar} className="img"></img>
            </div>
            <Link
              to={'/profileEdit'}
              state={{
                gender: user.gender,
                age: user.age,
                height: user.height,
                weight: user.weight,
                goal_weight: user.goal_weight,
                activity_level: user.activity_level,
                user_id: user.id,
              }}
            >
              <i class="fa fa-pen fa-l edit"></i>
            </Link>

            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>:</td>
                  <td>{user.age}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>:</td>
                  <td>{user.height}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>:</td>
                  <td>{user.weight}</td>
                </tr>
                <tr>
                  <td>Goal</td>
                  <td>:</td>
                  <td>
                    {user.weight > user.goal_weight
                      ? 'Weight Loss'
                      : 'Weight Gain'}
                  </td>
                </tr>
                <tr>
                  <td>Goal Weight</td>
                  <td>:</td>
                  <td>{user.goal_weight}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
