import React from "react";
import styled from "styled-components";

import risa from "../../assets/backImage/risa.png";
import assembly from "../../assets/campaign/assembly.jpg";
import fishing from "../../assets/campaign/fishing_01.jpg";
import greenPluged from "../../assets/campaign/greenPluged.jpg";
import jejudo from "../../assets/campaign/jejudo.jpg";
import allStar from "../../assets/campaign/KBOallstar.jpg";

const Container = styled.div`
  width: 100vw;
  margin-top: 0px;
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
  color: black;
`;

const CompanyDiv = styled.div`
  width: 100vw;
  margin: 0 auto;
  background-color: whitesmoke;
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
`;
const CampaignItem = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0 auto;
  width: 400px;
  height: 400px;
  background-color: whitesmoke;
`;

const CampaignPicFishing = styled.div`
  width: 400px;
  height: 250px;
  background-color: peru;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
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
`;

const CampainText = styled.div`
  width: 400px;
  height: 150px;
  padding-top: 70px;
  padding: 70px 20px 10px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  text-align: justify;
  color: black;
  background-color: white;
  z-index: 0;
`;

const CompanyPresenterPresenter = () => (
  <Container>
    <Title>Campaigns</Title>
    <CompanyDiv>
      <CampaignContainer>
        <CampaignItem>
          <CampaignPicFishing bgImage={assembly}></CampaignPicFishing>
          <CampaignPeople bgImage={assembly}></CampaignPeople>
          <CampainText>
            여의도 국회의원회관에 서 열린 ‘길거리 담배꽁초 어떻게 할 것인가?’
            토론회에서 , 해마다 4조 개비가 버려지는 있고 미세 플라스틱이자 화학
            폐기물인 담배꽁초 문제를 해결하기 위한 대안으로 시가랩을 제시했다.
          </CampainText>
        </CampaignItem>
        <CampaignItem>
          <CampaignPicFishing bgImage={fishing}></CampaignPicFishing>
          <CampaignPeople bgImage={fishing}></CampaignPeople>
          <CampainText>
            담배꽁초 무단투기로 인한 해양생태계파괴를 막기 위해 시가랩을
            사용하여 흡연자와 담배생산자가 담배꽁초를 모으고 수거하자는 메시지를
            낚시인들에게 알렸다.
          </CampainText>
        </CampaignItem>
      </CampaignContainer>
      <CampaignContainer>
        <CampaignItem>
          <CampaignPicFishing bgImage={greenPluged}></CampaignPicFishing>
          <CampaignPeople bgImage={greenPluged}></CampaignPeople>
          <CampainText>
            시가랩은 젊은이들의 대표 봄철 환경 페스티벌인 ‘그린플러그드
            서울(2019)”에 참가해서 20-30세대들로 부터 담배꽁초 문제 해결을 위한
            실천적 대안으로 큰 호응을 받았다.
          </CampainText>
        </CampaignItem>
        <CampaignItem>
          <CampaignPicFishing bgImage={allStar}></CampaignPicFishing>
          <CampaignPeople bgImage={allStar}></CampaignPeople>
          <CampainText>
            프로야구 올스타전이 열리는 창원NC파크를 찾아가 20대 부터 70대까지
            다양한 연령층의 흡연자들에게 시가랩을 소개하였고, 전 연령층으로의
            확산 가능성을 확인했다.
          </CampainText>
        </CampaignItem>
      </CampaignContainer>
      <CampaignContainer>
        <CampaignItem>
          <CampaignPicFishing bgImage={jejudo}></CampaignPicFishing>
          <CampaignPeople bgImage={jejudo}></CampaignPeople>
          <CampainText>
            피서철인 8월에 제주도 7개 해수욕장에서 순차적으로 실시된 ‘시가랩
            캠페인’을 통해, 제주해변을 보존하고자 하는 제주도민과 전국에서 온
            피서객들의 의식, 그리고 ’시가랩 캠페인’의 성공 가능성을 확인 할 수
            있었다.
          </CampainText>
        </CampaignItem>
        <CampaignItem>
          <CampaignPicFishing bgImage={risa}></CampaignPicFishing>
          <CampaignPeople bgImage={risa}></CampaignPeople>
          <CampainText>
            가나다라마바사아 자차카타파하가나다라마바사아
            자차카타파하가나다라마바사아 자차카타파하가나다라마바사아
            자차카타파하가나다라마바사아 자차카타파하가나다라마바사아
            자차카타파하가나다라마바사아 자차카타파하
          </CampainText>
        </CampaignItem>
      </CampaignContainer>
    </CompanyDiv>
  </Container>
);

export default CompanyPresenterPresenter;
