/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import "./style.css";
export default () => {
  let arrayNumber = [6, 7, 8, 1, 11, 10, 20, 19];
  let max = arrayNumber[0];
  let secondMaximum = arrayNumber[0];
  for (let x = 1; x < arrayNumber.length; x++) {
    if (arrayNumber[x] > max) {
      secondMaximum = max;
      max = arrayNumber[x];
    } else if (arrayNumber[x] > secondMaximum) {
      secondMaximum = arrayNumber[x];
    }
  }

  return (
    <div className="main-exe">
      <h1>Excercise One</h1>
      <p style={{ color: "red" }}>Maximum Number :{max}</p>
      <p style={{ color: "red" }}>Second Maximum Number : {secondMaximum}</p>
    </div>
  );
};
