import React from "react";
import styled from "styled-components";

import risa from "../../assets/backImage/risa.png";

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
          <CampaignPicFishing bgImage={risa}></CampaignPicFishing>
          <CampaignPeople bgImage={risa}></CampaignPeople>
          <CampainText>
            가나다라마바사아 자차카타파하가나다라마바사아
            자차카타파하가나다라마바사아 자차카타파하가나다라마바사아
            자차카타파하가나다라마바사아 자차카타파하가나다라마바사아
            자차카타파하가나다라마바사아 자차카타파하
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
      <CampaignContainer>
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
      <CampaignContainer>
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
      <CampaignContainer>
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
