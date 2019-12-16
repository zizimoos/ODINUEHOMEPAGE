import React from "react";
import styled from "styled-components";

const SuperiorityOne = styled.div`
  width: 100vw;
  height: 1000px;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    height: 1200px;
  }
  /* background-color: #7937be; */
`;
const Title = styled.div`
  margin: 0 auto;
  margin: 20px;
  margin-top: 50px;
  text-align: center;
  font-size: 50px;
  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;
const SubTitle = styled.div`
  margin: 0 auto;
  margin: 10px;
  margin-bottom: 100px;
  text-align: center;
  font-size: 30px;
`;
const Text = styled.div`
  margin: 0 auto;

  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  font-size: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  &:nth-child(1) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Card = styled.div`
  width: 30vw;
  height: 300px;
  font-size: 20px;
  font-weight: 800;
  margin-right: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-left: 20px;
  background-color: #bdc3c7;
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
    width: 70vw;
    height: 200px;
    margin-bottom: 20px;
  }
`;

export default () => (
  <SuperiorityOne>
    <Title>UCS(Unified Channel System)</Title>
    <SubTitle>통합 채널 시스템 전문가 집단</SubTitle>
    <Text>우리는 무엇을 해결 할까요?</Text>
    <CardContainer>
      <Card>K 고객사 토스 연동</Card>
      <Card>B 고객사 SMS 순번 오류 해결</Card>
    </CardContainer>
    <CardContainer>
      <Card></Card>
      <Card></Card>
    </CardContainer>
  </SuperiorityOne>
);
