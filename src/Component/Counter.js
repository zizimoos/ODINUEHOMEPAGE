import React from "react";
import styled from "styled-components";

const CounterContainer = styled.div`
  width: 100vw;
  height: 80px;
  margin: 0 auto;
  z-index: 10;
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

export default ({ months, days, minutes, hours, seconds }) => (
  <CounterContainer>
    <ClockTitle>
      {`${months < 10 ? `00${months}` : months} months
      ${days < 10 ? `00${days}` : days} days 
      ${hours < 10 ? `0${hours}` : hours} hours 
      ${minutes < 10 ? `0${minutes}` : minutes} minutes 
      ${seconds < 10 ? `0${seconds}` : seconds} seconds`}
    </ClockTitle>
  </CounterContainer>
);
