import React from "react";
import styled from "styled-components";

import KBkookmincardCI from "../img/KBkookmincardCI.png";
import KBkookminBank from "../img/KBkookminBank.png";
import ShinHanBank from "../img/ShinHanBank.png";
import WooRiBank from "../img/WooRiBank.png";
import WooRiCard from "../img/WooRiCard.png";
import HanaBank from "../img/HanaBank.png";
import SaeMaelBank from "../img/SaeMaELBank.png";
import BusanBank from "../img/BusanBank.png";
import DaeguBank from "../img/DaeguBank.png";
import SuhuypBank from "../img/SuhuypBank.png";
import JunbookBank from "../img/JunbookBank.png";
import GwangjuBank from "../img/GwangjuBank.png";
import SamsungCard from "../img/SamsungCard.png";
import CityBank from "../img/CityBank.png";
import KBank from "../img/KBank.png";
import IBK from "../img/IBK.png";

const SuperiorityThree = styled.div`
  width: 100vw;
  height: 1400px;
  margin: 0 auto;
  background-color: white;
  @media only screen and (max-width: 768px) {
    height: 1200px;
  }
  /* background-color: #383f10; */
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 0px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }
`;

const Title = styled.div`
  height: 150px;
  text-align: center;
  padding-top: 80px;
  font-size: 60px;
  font-weight: 600;
  color: #7a7f78;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
const CoWoker01 = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${KBkookmincardCI});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  /* background-color: #900216; */
  &:hover {
    transform: scale(1.1, 1.1);
    /* box-shadow: 5px 10px 8px #888888; */
  }
  transition: transform 0.3s ease-in-out;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 150px;
  }
`;
const CoWoker02 = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${ShinHanBank});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
`;
const CoWoker03 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-image: url(${KBkookminBank});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
`;
const CoWoker04 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-image: url(${WooRiBank});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
`;
const CoWoker05 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-image: url(${WooRiCard});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
`;
const CoWoker06 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-image: url(${HanaBank});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
`;
const CoWoker07 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-image: url(${SaeMaelBank});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
`;
const CoWoker08 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-image: url(${BusanBank});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
`;
const CoWoker09 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-image: url(${DaeguBank});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
`;
const CoWoker10 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-image: url(${SuhuypBank});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
`;
const CoWoker11 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-image: url(${JunbookBank});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
`;
const CoWoker12 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-image: url(${GwangjuBank});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
`;
const CoWoker13 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-image: url(${SamsungCard});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
`;
const CoWoker14 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-image: url(${CityBank});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
`;
const CoWoker15 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-image: url(${KBank});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
`;
const CoWoker16 = styled.div`
  width: 100%;
  height: 300px;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
  background-image: url(${IBK});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.3s ease-in-out;
`;
export default () => (
  <SuperiorityThree>
    <Title>Customers</Title>
    <GridContainer>
      <CoWoker01>1</CoWoker01>
      <CoWoker02>2</CoWoker02>
      <CoWoker03>3</CoWoker03>
      <CoWoker04>4</CoWoker04>
      <CoWoker05>5</CoWoker05>
      <CoWoker06>6</CoWoker06>
      <CoWoker07>7</CoWoker07>
      <CoWoker08>8</CoWoker08>
      <CoWoker09>9</CoWoker09>
      <CoWoker10>10</CoWoker10>
      <CoWoker11>11</CoWoker11>
      <CoWoker12>12</CoWoker12>
      <CoWoker13></CoWoker13>
      <CoWoker14></CoWoker14>
      <CoWoker15></CoWoker15>
      <CoWoker16></CoWoker16>
    </GridContainer>
  </SuperiorityThree>
);
