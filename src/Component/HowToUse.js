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
  height: 1000px;
  padding: 100px;
  background-color: #336e7b;
`;

const PicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pic = styled.div`
  width: 28vw;
  height: 260px;
  margin: 10px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  border-radius: 10px;
`;

const HowToUse = () => (
  <Container>
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
