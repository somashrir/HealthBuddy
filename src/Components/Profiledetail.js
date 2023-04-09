import React from 'react'
import styles from './CSS/profile.module.css'
import './CSS/button.css'
import {Link} from 'react-router-dom'
import avatar from '../Assets/avatar.png'
export const Profiledetail = () => {
  return (
    <>
      <div class="main">
        <h2>Profile Details</h2>
        <div class="card">
          <div class="card-body">
            <div className="profile">
              <img src={avatar} className="img"></img>
            </div>
            <Link to="/profile">
              <i class="fa fa-pen fa-l edit"></i>
            </Link>

            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>name</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>i@gmail.com</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>:</td>
                  <td>32 years</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>:</td>
                  <td>165cm</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>:</td>
                  <td>65 Kg</td>
                </tr>
                <tr>
                  <td>Goal</td>
                  <td>:</td>
                  <td>Weight Loss/Gain</td>
                </tr>
                <tr>
                  <td>Goal Weight</td>
                  <td>:</td>
                  <td>60 Kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
