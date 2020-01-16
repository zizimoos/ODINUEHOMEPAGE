import React from "react";
import styled from "styled-components";
import HomeFirst from "../../Component/HomeFirst";
import HomeSecond from "../../Component/HomeSecond";

const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 0px;
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
  </Container>
);

export default HomePresenter;
