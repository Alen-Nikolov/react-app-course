import React from 'react';
import {  Link } from "react-router-dom";


const cinema = (props) => {
  return (
    <div style={{marginBottom: '30px'}}>
      <img src={props.picture} alt=""/>
      <p>Adress: {props.address}</p>
      <p>Work Time: {props.work}</p>
      <a href='/movies'>Program</a>
    </div>
  )
}

export default cinema;
