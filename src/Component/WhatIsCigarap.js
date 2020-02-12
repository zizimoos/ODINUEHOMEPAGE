import React from "react";
import styled from "styled-components";

import cigarapTitle from "../assets/homeImages/cigarapTitle.jpg";

const WhatIsCigarap = styled.div`
  width: 100vw;
  margin-top: 200px;
  padding: 50px;
  background-color: whitesmoke;
  @media only screen and (max-width: 768px) {
    width: 100vw;
    margin-top: 200px;
    padding: 0px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const DescriptionTitle = styled.div`
  font-size: 21px;
  margin: 0px;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 20px;
    width: 300px;
  }
`;

const Description = styled.div`
  width: 25vw;
  padding: 20px;
  line-height: 20px;
  text-align: justify;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  color: gray;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    width: 100vw;
  }
`;

const TitlePic = styled.div`
  width: 40vw;
  height: 390px;
  margin-left: 50px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    width: 100vw;
  }
`;

export default () => (
  <WhatIsCigarap>
    <Container>
      <Description>
        <DescriptionTitle>담배꽁초 낱개포장지</DescriptionTitle>
        얇은 종이 타입으로 담배와 함께 휴대하여, 흡연 후 꽁초를 버리지 않고
        포장해서 임시보관 할 수 있다. 담뱃불에 타지 않도록 난연 처리 되어있고,
        냄새가 나지 않도록 밀봉할 수 있다. 담배꽁초 무단투기 방지 뿐만 아니라
        꽁초 분리수거와 재활용까지 고려해 제작되었다.
      </Description>
      <TitlePic bgImage={cigarapTitle}></TitlePic>
    </Container>
  </WhatIsCigarap>
);
