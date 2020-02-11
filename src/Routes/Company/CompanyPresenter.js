import React from "react";
import styled from "styled-components";

import assembly from "../../assets/campaign/assembly.jpg";
import assemblyFace from "../../assets/campaign/assemblyFace.png";

import bexco from "../../assets/campaign/bexco.jpeg";
import fishing from "../../assets/campaign/fishing_01.jpg";

import greenPluged from "../../assets/campaign/greenPluged_01.jpg";
import greenFace from "../../assets/campaign/greenPlugedFace.png";

import jejudo from "../../assets/campaign/jejudo.jpg";
import jejudoFace from "../../assets/campaign/jejudoFace.png";

import allStar from "../../assets/campaign/KBOallstar.jpg";
import allStarFace from "../../assets/campaign/KBOallstarFace.png";

import samsungA from "../../assets/campaign/samsungAss.png";

const Container = styled.div`
  width: 100vw;
  height: 1500px;
  margin-top: 0px;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 3000px;
  }
`;

const Title = styled.div`
  margin: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 50px;
  text-align: center;
  font-family: "Changa", sans-serif;
  font-size: 50px;
  font-weight: 600;
  color: #7a7f78;
`;

const CompanyDiv = styled.div`
  width: 100vw;
  margin: 0 auto;
  background-color: whitesmoke;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    width: 100vw;
    height: 400px;
  }
`;

const CampaignContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;

  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 400px;
  background-color: whitesmoke;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 900px;
  }
`;
const CampaignItem = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0 auto;
  width: 100vw;
  height: 400px;
  background-color: whitesmoke;
  @media only screen and (max-width: 768px) {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 400px;
    margin-bottom: 50px;
  }
`;

const CampaignPicFishing = styled.div`
  width: 400px;
  height: 250px;
  background-color: peru;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 400px;
  }
`;

const CampaignPeople = styled.div`
  position: absolute;
  top: 200px;
  left: 150px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid whitesmoke;
  background-color: yellowgreen;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  z-index: 10;
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 200px;
    left: 37%;
  }
`;
const CampaignTitle = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: black;
`;
const CampainText = styled.div`
  width: 375px;
  height: 150px;
  padding-top: 70px;
  padding: 50px 30px 10px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  text-align: justify;
  line-height: 17px;
  color: gray;
  background-color: white;
  z-index: 0;
  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const CompanyPresenterPresenter = () => (
  <Container>
    <Title>Campaigns</Title>
    <CompanyDiv>
      <CampaignContainer>
        <CampaignItem>
          <CampaignPicFishing bgImage={assembly}></CampaignPicFishing>
          <CampaignPeople bgImage={assemblyFace}></CampaignPeople>
          <CampainText>
            <CampaignTitle>2월, 국회토론회</CampaignTitle>
            여의도 국회의원회관에 서 열린 ‘길거리 담배꽁초 어떻게 할 것인가?’
            토론회에서 , 해마다 4조 개비가 버려지는 있고 미세 플라스틱이자 화학
            폐기물인 담배꽁초 문제를 해결하기 위한 대안으로 시가랩을 제시했다.
          </CampainText>
        </CampaignItem>
        <CampaignItem>
          <CampaignPicFishing bgImage={bexco}></CampaignPicFishing>
          <CampaignPeople bgImage={fishing}></CampaignPeople>
          <CampainText>
            <CampaignTitle>3월, 2019 국제 낚시 박람회 (BEXCO)</CampaignTitle>
            담배꽁초 무단투기로 인한 해양생태계파괴를 막기 위해 시가랩을
            사용하여 흡연자와 담배생산자가 담배꽁초를 모으고 수거하자는 메시지를
            낚시인들에게 알렸다.
          </CampainText>
        </CampaignItem>
      </CampaignContainer>
      <CampaignContainer>
        <CampaignItem>
          <CampaignPicFishing bgImage={greenPluged}></CampaignPicFishing>
          <CampaignPeople bgImage={greenFace}></CampaignPeople>
          <CampainText>
            <CampaignTitle>5월, GreenPluged Seoul</CampaignTitle>
            시가랩은 젊은이들의 대표 봄철 환경 페스티벌인 ‘그린플러그드
            서울(2019)”에 참가해서 20-30세대들로 부터 담배꽁초 문제 해결을 위한
            실천적 대안으로 큰 호응을 받았다.
          </CampainText>
        </CampaignItem>
        <CampaignItem>
          <CampaignPicFishing bgImage={allStar}></CampaignPicFishing>
          <CampaignPeople bgImage={allStarFace}></CampaignPeople>
          <CampainText>
            <CampaignTitle>7월, 2019 프로야구 올스타전(창원)</CampaignTitle>
            프로야구 올스타전이 열리는 창원NC파크를 찾아가 20대 부터 70대까지
            다양한 연령층의 흡연자들에게 시가랩을 소개하였고, 전 연령층으로의
            확산 가능성을 확인했다.
          </CampainText>
        </CampaignItem>
      </CampaignContainer>
      <CampaignContainer>
        <CampaignItem>
          <CampaignPicFishing bgImage={jejudo}></CampaignPicFishing>
          <CampaignPeople bgImage={jejudoFace}></CampaignPeople>
          <CampainText>
            <CampaignTitle>8월, 제주해변 캠페인</CampaignTitle>
            피서철인 8월에 제주도 7개 해수욕장에서 순차적으로 실시된 ‘시가랩
            캠페인’을 통해, 제주해변을 보존하고자 하는 제주도민과 전국에서 온
            피서객들의 의식, 그리고 ’시가랩 캠페인’의 성공 가능성을 확인 할 수
            있었다.
          </CampainText>
        </CampaignItem>
        <CampaignItem>
          <CampaignPicFishing bgImage={samsungA}></CampaignPicFishing>
          <CampaignPeople bgImage={samsungA}></CampaignPeople>
          <CampainText>
            <CampaignTitle>8월, 삼성생명 MOU</CampaignTitle>
            삼성생명 한남동 지점과 상호 업무 협조 양해각서를 체결하였다.
            매너있는 흡연문화 정착에 상호 공감하고 노력하기로 하였다.
          </CampainText>
        </CampaignItem>
      </CampaignContainer>
    </CompanyDiv>
  </Container>
);

export default CompanyPresenterPresenter;
