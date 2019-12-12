import React from "react";
import styled from "styled-components";

const BACK_COLOR = "#141414";

const Container = styled.div`
  width: 100vw;
  margin-top: 0px;
  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;
const ProductDiv = styled.div`
  width: 100vw;
  height: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  margin-left: 0px;
  /* background-color: #383f10; */
  position: relative;
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    height: 800px;
  }
`;
const MoneBrief1 = styled.div`
  font-size: 40px;
  color: #81cfe0;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  margin-bottom: 30px;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    margin-bottom: 10px;
    font-size: 16px;
  }
`;
const MoneBrief2 = styled.div`
  font-size: 40px;
  color: #81cfe0;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 60px;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    font-size: 16px;
  }
`;

const WebFileEAIDBTcpIp = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: 190px;
  left: 225px;
  transform: rotate(310deg) scale(3.3, 3.3);
  transform-origin: 50% 100%;
  /* transform: scale(3, 3); */
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  border-top: 110px solid yellowgreen;
  border-radius: 50%;
  z-index: -1;
  @media only screen and (max-width: 768px) {
    transform: rotate(310deg) scale(1.7, 1.7);
    position: absolute;
    top: 60px;
    left: 90px;
  }
`;

const KTLGSKandOthers = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: 190px;
  left: 225px;
  transform: rotate(50deg) scale(3.3, 3.3);
  transform-origin: 50% 100%;
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  border-top: 110px solid yellow;
  border-radius: 50%;
  z-index: -1;
  @media only screen and (max-width: 768px) {
    transform: rotate(50deg) scale(1.7, 1.7);
    position: absolute;
    top: 60px;
    left: 110px;
  }
`;
const BusinessPart = styled.div`
  width: 600px;
  height: 600px;
  /* background: #2c3e50; */
  background-color: #22313f;
  position: relative;
  transform: rotate(0deg);
  transform-origin: 50% 50%;
  border-radius: 50%;
  margin: 0 auto;

  /* padding-top: 50px; */
  z-index: -1;
  @media only screen and (max-width: 768px) {
    width: 350px;
    height: 350px;
    margin-left: 10px;
  }
`;
const SmsLmsMMSFaxEmail = styled.div`
  width: 500px;
  height: 500px;
  background: transparent;
  border-radius: 50%;
  border: 40px solid #141414;
  position: absolute;
  top: 50px;
  left: 50px;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 25px;
    left: 25px;
  }
`;

const MoneCoreCircleFunction = styled.div`
  width: 200px;
  height: 200px;
  background: #141414;
  border-radius: 50%;
  position: absolute;
  top: 200px;
  left: 200px;
  @media only screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 125px;
    left: 125px;
  }
`;
const MoneCoreCircle = styled.div`
  width: 155px;
  height: 155px;
  background: red;
  border-radius: 50%;
  position: absolute;
  top: 222px;
  left: 222px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 75px;
    height: 75px;
    position: absolute;
    top: 137.5px;
    left: 137.5px;
  }
`;

const MoneCoreTitle = styled.div`
  color: white;
  font-size: 30px;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Pointer1 = styled.div`
  width: 200px;
  height: 40px;
  position: absolute;
  top: 230px;
  left: -25px;
  background: red;
  z-index: 20;
  transform: rotate(10deg) scale(0.4, 0.4);
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  &:before {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid red;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 120px;
    left: -55px;
    background: red;
    z-index: 20;
    transform: rotate(10deg) scale(0.3, 0.3);
  }
`;

const Pointer2 = styled.div`
  width: 190px;
  height: 40px;
  position: absolute;
  top: 180px;
  left: -3px;
  background: red;
  z-index: 20;
  transform: rotate(27deg) scale(0.4, 0.4);
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  &:before {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid red;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 92px;
    left: -40px;
    background: red;
    z-index: 20;
    transform: rotate(29deg) scale(0.3, 0.3);
  }
`;
const Pointer3 = styled.div`
  width: 200px;
  height: 40px;
  position: absolute;
  top: 130px;
  left: 25px;
  background: red;
  z-index: 20;
  transform: rotate(40deg) scale(0.4, 0.4);
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  &:before {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid red;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: -30px;
    background: red;
    z-index: 20;
    transform: rotate(40deg) scale(0.3, 0.3);
  }
`;
const Pointer4 = styled.div`
  width: 200px;
  height: 40px;
  position: absolute;
  top: 90px;
  left: 65px;
  background: red;
  z-index: 20;
  transform: rotate(55deg) scale(0.4, 0.4);
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  &:before {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid red;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 50px;
    left: -10px;
    background: red;
    z-index: 20;
    transform: rotate(50deg) scale(0.3, 0.3);
  }
`;

const Pointer5 = styled.div`
  width: 200px;
  height: 40px;
  position: absolute;
  top: 65px;
  left: 110px;
  background: red;
  z-index: 20;
  transform: rotate(67deg) scale(0.4, 0.4);
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  &:before {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid red;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 35px;
    left: 15px;
    background: red;
    z-index: 20;
    transform: rotate(67deg) scale(0.3, 0.3);
  }
`;

const PointerOut1 = styled.div`
  width: 200px;
  height: 40px;
  position: absolute;
  top: 70px;
  left: 290px;
  background: #22a7f0;
  z-index: 20;
  transform: rotate(290deg) scale(0.4, 0.4);
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  &:before {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid #22a7f0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 40px;
    left: 130px;
    background: #22a7f0;
    z-index: 20;
    transform: rotate(290deg) scale(0.3, 0.3);
  }
`;
const PointerOut2 = styled.div`
  width: 200px;
  height: 40px;
  position: absolute;
  top: 95px;
  left: 335px;
  background: #22a7f0;
  z-index: 20;
  transform: rotate(305deg) scale(0.4, 0.4);
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  &:before {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid #22a7f0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 50px;
    left: 155px;
    background: #22a7f0;
    z-index: 20;
    transform: rotate(305deg) scale(0.3, 0.3);
  }
`;
const PointerOut3 = styled.div`
  width: 200px;
  height: 40px;
  position: absolute;
  top: 130px;
  left: 370px;
  background: #22a7f0;
  z-index: 20;
  transform: rotate(320deg) scale(0.4, 0.4);
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  &:before {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid #22a7f0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: 175px;
    background: #22a7f0;
    z-index: 20;
    transform: rotate(320deg) scale(0.3, 0.3);
  }
`;
const PointerOut4 = styled.div`
  width: 200px;
  height: 40px;
  position: absolute;
  top: 175px;
  left: 400px;
  background: #22a7f0;
  z-index: 20;
  transform: rotate(330deg) scale(0.4, 0.4);
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  &:before {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid #22a7f0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 95px;
    left: 190px;
    background: #22a7f0;
    z-index: 20;
    transform: rotate(330deg) scale(0.3, 0.3);
  }
`;
const PointerOut5 = styled.div`
  width: 200px;
  height: 40px;
  position: absolute;
  top: 230px;
  left: 420px;
  background: #22a7f0;
  z-index: 20;
  transform: rotate(350deg) scale(0.4, 0.4);
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  &:before {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid #22a7f0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 125px;
    left: 200px;
    background: #22a7f0;
    z-index: 20;
    transform: rotate(350deg) scale(0.3, 0.3);
  }
`;

const BunBae = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #99cd31;
  position: absolute;
  top: 160px;
  left: 370px;
  padding-top: 33px;
  font-size: 20px;
  color: black;
  text-align: center;
  border: 2px solid gray;
  @media only screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
    position: absolute;
    top: 105px;
    left: 215px;
    padding-top: 13px;
    font-size: 16px;
  }
`;

const JubSu = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #ffff00;
  position: absolute;
  top: 160px;
  left: 140px;
  padding-top: 33px;
  font-size: 20px;
  color: black;
  text-align: center;
  border: 2px solid gray;
  @media only screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
    position: absolute;
    top: 105px;
    left: 95px;
    padding-top: 13px;
    font-size: 16px;
  }
`;

const TongJi = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #67809f;
  position: absolute;
  top: 300px;
  left: 110px;
  padding-top: 33px;
  font-size: 20px;
  color: #e8ecf1;
  text-align: center;
  border: 2px solid #e8ecf1;
  @media only screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
    position: absolute;
    top: 175px;
    left: 80px;
    padding-top: 13px;
    font-size: 16px;
  }
`;

const CheoRi = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #67809f;
  position: absolute;
  top: 395px;
  left: 190px;
  padding-top: 33px;
  font-size: 20px;
  color: #e8ecf1;
  text-align: center;
  border: 2px solid #e8ecf1;
  @media only screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
    position: absolute;
    top: 225px;
    left: 120px;
    padding-top: 13px;
    font-size: 16px;
  }
`;

const Mo = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #013243;
  position: absolute;
  top: 395px;
  left: 315px;
  padding-top: 33px;
  font-size: 20px;
  color: #22a7f0;
  text-align: center;
  border: 2px solid #22a7f0;
  @media only screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
    position: absolute;
    top: 225px;
    left: 185px;
    padding-top: 13px;
    font-size: 16px;
  }
`;
const Push = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #674172;
  position: absolute;
  top: 300px;
  left: 400px;
  padding-top: 33px;
  font-size: 20px;
  color: #be90d4;
  text-align: center;
  border: 2px solid #be90d4;
  @media only screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
    position: absolute;
    top: 175px;
    left: 225px;
    padding-top: 13px;
    font-size: 16px;
  }
`;

const ProductPresenter = () => (
  <Container>
    <ProductDiv>
      <MoneBrief1>
        M1은 고객사 내부의 메시징 센터(서버) 구축용 기반 소프트웨어입니다.
      </MoneBrief1>
      <MoneBrief2>M1은 이중화(다중화) 분배 소프트웨어입니다.</MoneBrief2>
      <BusinessPart>
        <Pointer1></Pointer1>
        <Pointer2></Pointer2>
        <Pointer3></Pointer3>
        <Pointer4></Pointer4>
        <Pointer5></Pointer5>
        <PointerOut1></PointerOut1>
        <PointerOut2></PointerOut2>
        <PointerOut3></PointerOut3>
        <PointerOut4></PointerOut4>
        <PointerOut5></PointerOut5>
        <JubSu>접 수</JubSu>
        <BunBae>분 배</BunBae>
        <TongJi>통 지</TongJi>
        <CheoRi>처 리</CheoRi>
        <Mo>MO</Mo>
        <Push>PUSH</Push>

        {/* <JuBBsu></JuBBsu>
        <BunBae></BunBae> */}
        <SmsLmsMMSFaxEmail></SmsLmsMMSFaxEmail>
        <MoneCoreCircleFunction></MoneCoreCircleFunction>
        <MoneCoreCircle>
          <MoneCoreTitle>M1 Core</MoneCoreTitle>
        </MoneCoreCircle>
        <KTLGSKandOthers></KTLGSKandOthers>
        <WebFileEAIDBTcpIp></WebFileEAIDBTcpIp>
      </BusinessPart>
    </ProductDiv>
  </Container>
);

export default ProductPresenter;
