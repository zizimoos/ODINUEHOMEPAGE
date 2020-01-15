import React from "react";
import styled from "styled-components";
// import CounterContainer from "./Counter";
import ButtsNumberDisplay from "./ButtsCounter";

const HomeFirst = styled.div`
  position: relative;
  width: 100vw;
  height: 800px;
  z-index: 1;
`;
const Title = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  margin: 0 auto;
  margin: 20px;
  margin-top: 50px;
  padding-top: 150px;
  text-align: center;
  font-family: "Changa", sans-serif;
  /* color: #2574a9; */
  color: black;
  font-size: 80px;
  font-weight: 600;
`;
const SecondTitle = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  margin: 0 auto;
  margin: 20px;
  margin-top: 50px;
  text-align: center;
  font-family: "Changa", sans-serif;
  font-size: 50px;
  font-weight: 600;
  color: #2574a9;
  text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const Backdrop = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  /* background-color: peru; */
  background-size: cover;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  filter: blur(3px);
  opacity: 1;
  z-index: -1;
  /* background-image: url("../../assets/backImage/cigarapWebBack_01.jpg");
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1; */
`;
export default ({
  months,
  days,
  minutes,
  hours,
  seconds,
  ButtsNumber,
  bgImage
}) => (
  <HomeFirst>
    <Backdrop bgImage={bgImage}></Backdrop>
    <Title>From 1 January 2020</Title>
    {/* <CounterContainer
      months={months}
      days={days}
      minutes={minutes}
      hours={hours}
      seconds={seconds}
    ></CounterContainer> */}
    <ButtsNumberDisplay ButtsNumber={ButtsNumber}></ButtsNumberDisplay>
    <SecondTitle>cigarettebutts are being thrown away</SecondTitle>
  </HomeFirst>
);
