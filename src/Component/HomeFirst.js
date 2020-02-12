import React from "react";
import styled from "styled-components";
// import CounterContainer from "./Counter";
import ButtsNumberDisplay from "./ButtsCounter";

const HomeFirst = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
`;
const Title = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  margin: 0 auto;
  margin: 20px;
  margin-top: 30px;
  padding-top: 0px;
  text-align: center;
  font-family: "Changa", sans-serif;
  /* color: #2574a9; */
  color: black;
  font-size: 60px;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    margin-top: 0px;
  }
`;
const SecondTitle = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  margin: 0 auto;
  margin: 20px;
  margin-top: 0px;
  margin-bottom: 40px;
  text-align: center;
  font-family: "Changa", sans-serif;
  font-size: 50px;
  font-weight: 600;
  color: #cf000f;
  text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    color: #cf000f;
  }
`;
const ThirdTitle = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  margin: 0 auto;
  margin: 20px;
  margin-top: 10px;
  margin-left: 300px;
  margin-right: 300px;
  text-align: justify;
  line-height: 30px;
  font-family: "Changa", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #2574a9;
  color: #003755;
  color: whitesmoke;
  background-color: black;
  text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  @media only screen and (max-width: 768px) {
    font-size: 13px;
    color: #cf000f;
    color: whitesmoke;
    line-height: 20px;
    padding-left: 10px;
    padding-right: 10px;
    text-shadow: 2px 2px 2px gray;
  }
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
  filter: blur(4px);
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
    <ThirdTitle>전세계 흡연인구는 약 10억명</ThirdTitle>
    <ThirdTitle>연간 길거리에 버려지는 담배꽁초 갯수는 4조 개비</ThirdTitle>
    <ThirdTitle>
      금연에 대한 논의는 많지만 지금 이 순간에도 수없이 버려지고 있는 담배꽁초
      문제에 대한 논의는 문제의 심각성에 비해 턱없이 부족합니다. 실내 금연이
      확산되면서 버려지는 담배꽁초는 더 많아 지고 있습니다. 흡연자들의 양심에
      호소하기 보다는 흡연자들의 자발적인 참여를 유도 할 수 있는 방법은 없을까?
      시가랩은 이 고민에서 시작되었습니다.{" "}
    </ThirdTitle>
    <ThirdTitle>
      시가랩은 휴대하고 사용하기 편리하며 안전하고 아름다운 담배꽁초
      포장지입니다.
    </ThirdTitle>
  </HomeFirst>
);
