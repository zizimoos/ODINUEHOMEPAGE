import React from "react";
import styled from "styled-components";

import howToUse_01 from "../assets/howToUse/howToUse_01.jpg";
import howToUse_02 from "../assets/howToUse/howToUse_02.jpg";
import howToUse_03 from "../assets/howToUse/howToUse_03.jpg";
import howToUse_04 from "../assets/howToUse/howToUse_04.jpg";
import howToUse_05 from "../assets/howToUse/howToUse_05.jpg";
import howToUse_06 from "../assets/howToUse/howToUse_06.jpg";

const Container = styled.div`
  width: 100vw;
  height: 1050px;
  padding: 100px;
  background-color: #336e7b;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0px;
    width: 100vw;
    height: 1650px;
    background-color: whitesmoke;
  }
`;

const PicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`;

const Pic = styled.div`
  width: 28vw;
  height: 260px;
  margin-bottom: 10px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  border-radius: 10px;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`;
const DescriptionTitle = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 21px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
  color: whitesmoke;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 300px;
  }
`;

const HowToUse = () => (
  <Container>
    <DescriptionTitle> 올바른 시가랩 사용법</DescriptionTitle>
    <PicContainer>
      <Pic bgImage={howToUse_01}></Pic>
      <Pic bgImage={howToUse_02}></Pic>
    </PicContainer>
    <PicContainer>
      <Pic bgImage={howToUse_03}></Pic>
      <Pic bgImage={howToUse_04}></Pic>
    </PicContainer>
    <PicContainer>
      <Pic bgImage={howToUse_05}></Pic>
      <Pic bgImage={howToUse_06}></Pic>
    </PicContainer>
  </Container>
);

export default HowToUse;
