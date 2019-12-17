import React from "react";
import styled from "styled-components";
import CounterContainer from "./Counter";

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
export default () => (
  <HomeFirst>
    <Title>Timer & counter</Title>
    <CounterContainer></CounterContainer>
  </HomeFirst>
);
