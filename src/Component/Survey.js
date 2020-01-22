import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 500px;
  padding: 100px;
  background-color: whitesmoke;
`;

const Progress = keyframes`
0% {
    stroke-dasharray: 0 100;
  }`;

const Svg = styled.svg`
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
  path {
    stroke: #4cc790;
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
    animation: ${Progress} 1s ease-out forwards;
  }
`;

export default () => (
  <Container>
    <Svg viewBox="0 0 36 36" className="circular-chart">
      <path
        className="circle"
        stroke-dasharray="80, 100"
        d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </Svg>
  </Container>
);
