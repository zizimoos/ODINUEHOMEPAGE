import React from "react";
import styled from "styled-components";
import CounterContainer from "./Counter";
import ButtsNumberDisplay from "./ButtsCounter";

const HomeFirst = styled.div`
  width: 100vw;
  height: 1000px;
  z-index: 1;
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
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background-color: peru; */
  background-image: url(${props => props.bgImage});
  background-position: center center;
  z-index: -1;
  /* background-image: url("../../assets/backImage/cigarapWebBack_01.jpg");
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1; */
`;
export default ({ months, days, minutes, hours, seconds, ButtsNumber }) => (
  <HomeFirst>
    <Backdrop bgImage={"../cigarapWebBack_01.jpg"}></Backdrop>
    <Title>Until the end of this year</Title>
    <CounterContainer
      months={months}
      days={days}
      minutes={minutes}
      hours={hours}
      seconds={seconds}
    ></CounterContainer>
    <SecondTitle>
      The number of cigarette butts "NOW" being thrown away
    </SecondTitle>
    <ButtsNumberDisplay ButtsNumber={ButtsNumber}></ButtsNumberDisplay>
  </HomeFirst>
);
