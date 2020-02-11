import React from "react";
import styled from "styled-components";
import HomeFirst from "../../Component/HomeFirst";
import HomeSecond from "../../Component/HomeSecond";
import NotThrowing from "../../Component/NotThrowing";

const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 0px;
  @media only screen and (max-width: 768px) {
    width: 100vw;
    padding: 0px 0px;
    align-items: center;
  }
`;

// const MonePic = styled.div`
//   width: 100vw;
//   height: 700px;
//   margin: 0 auto;
//   background-color: #b0a8a6;
// `;

const HomePresenter = ({
  months,
  days,
  minutes,
  hours,
  seconds,
  ButtsNumber,
  bgImage
}) => (
  <Container>
    <HomeFirst
      months={months}
      days={days}
      minutes={minutes}
      hours={hours}
      seconds={seconds}
      ButtsNumber={ButtsNumber}
      bgImage={bgImage}
    ></HomeFirst>
    <HomeSecond></HomeSecond>
    <NotThrowing></NotThrowing>
  </Container>
);

export default HomePresenter;
