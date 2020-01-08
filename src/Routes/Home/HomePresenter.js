import React from "react";
import styled from "styled-components";
import SuperiorityTwo from "../../Component/SuperiorityTwo";
import HomeFirst from "../../Component/HomeFirst";

const Container = styled.div`
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
  ButtsNumber
}) => (
  <Container>
    <HomeFirst
      months={months}
      days={days}
      minutes={minutes}
      hours={hours}
      seconds={seconds}
      ButtsNumber={ButtsNumber}
    ></HomeFirst>
    <SuperiorityTwo> 차별성 2</SuperiorityTwo>
  </Container>
);

export default HomePresenter;
