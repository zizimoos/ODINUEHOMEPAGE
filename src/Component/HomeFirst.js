import React from "react";
import styled from "styled-components";
import CounterContainer from "./Counter";
import ButtsNumberDisplay from "./ButtsCounter";

const HomeFirst = styled.div`
  width: 100vw;
  height: 1000px;
`;
const Title = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  margin: 0 auto;
  margin: 20px;
  margin-top: 50px;
  text-align: center;
  font-family: "Changa", sans-serif;
  font-size: 80px;
  font-weight: 600;
  color: black;
`;
const SecondTitle = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  margin: 0 auto;
  margin: 20px;
  margin-top: 50px;
  text-align: center;
  font-family: "Changa", sans-serif;
  font-size: 40px;
  font-weight: 600;
  color: black;
`;
export default ({ months, days, minutes, hours, seconds, ButtsNumber }) => (
  <HomeFirst>
    <Title>Until the end of this year</Title>
    <CounterContainer
      months={months}
      days={days}
      minutes={minutes}
      hours={hours}
      seconds={seconds}
    ></CounterContainer>
    <SecondTitle>
      The number of cigarette butts now being thrown away
    </SecondTitle>
    <ButtsNumberDisplay ButtsNumber={ButtsNumber}></ButtsNumberDisplay>
  </HomeFirst>
);
