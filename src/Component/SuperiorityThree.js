import React from "react";
import styled from "styled-components";

const SuperiorityThree = styled.div`
  width: 100vw;
  height: 1200px;
  @media only screen and (max-width: 768px) {
    height: 1000px;
  }
  margin: 0 auto;
  background-color: #383f10;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }
  grid-gap: 0px;
`;
const CoWoker01 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 150px;
  }
  background-color: #900216;
  &:hover {
    transform: scale(1.05, 1.05);
  }
  transition: transform 0.3s ease-in-out;
`;
const CoWoker02 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-color: #992216;
  &:hover {
    transform: scale(1.05, 1.05);
  }
  transition: transform 0.3s ease-in-out;
`;
const CoWoker03 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-color: #902216;
  &:hover {
    transform: scale(1.05, 1.05);
  }
  transition: transform 0.3s ease-in-out;
`;
export default () => (
  <SuperiorityThree>
    SuperiorityThree
    <GridContainer>
      <CoWoker01>1</CoWoker01>
      <CoWoker02>2</CoWoker02>
      <CoWoker03>3</CoWoker03>
      <CoWoker01>4</CoWoker01>
      <CoWoker02>5</CoWoker02>
      <CoWoker03>6</CoWoker03>
      <CoWoker01>7</CoWoker01>
      <CoWoker02>8</CoWoker02>
      <CoWoker03>9</CoWoker03>
      <CoWoker01>10</CoWoker01>
      <CoWoker02>11</CoWoker02>
      <CoWoker03>12</CoWoker03>
    </GridContainer>
  </SuperiorityThree>
);
