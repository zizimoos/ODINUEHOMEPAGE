import React from "react";
import styled from "styled-components";

const CounterContainer = styled.div`
  width: 100vw;
  height: 500px;
  margin: 0 auto;
`;
const ClockTitle = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  margin: 0 auto;
  margin: 20px;
  margin-top: 50px;
  text-align: center;
  font-family: "Changa", sans-serif;
  font-size: 50px;
  font-weight: 600;
  color: black;
`;

const NINE_HOURS_MILLISECONDS = 32400000;

let days;
let minutes;
let hours;
let seconds;

function getTime() {
  const xmasDay = new Date("2019-12-30:00:00:00+0900");
  const now = new Date();
  const difference = new Date(xmasDay - now - NINE_HOURS_MILLISECONDS);
  days = difference.getDate();
  minutes = difference.getMinutes();
  hours = difference.getHours();
  seconds = difference.getSeconds();
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

export default () => (
  <CounterContainer>
    <ClockTitle>{`${days < 10 ? `00${days}` : days} days ${
      hours < 10 ? `0${hours}` : hours
    } hours ${minutes < 10 ? `0${minutes}` : minutes} minutes ${
      seconds < 10 ? `0${seconds}` : seconds
    } seconds`}</ClockTitle>
  </CounterContainer>
);
