import React from "react";
import styled from "styled-components";

const BACK_COLOR = "#141414";

const Container = styled.div`
  width: 100%;
  margin-top: 0px;
`;
const ProductDiv = styled.div`
  width: 100vw;
  height: 700px;
  margin: 0 auto;
  margin-top: 100px;
  /* background-color: #383f10; */
  position: relative;
`;

const BusinessPart = styled.div`
  width: 600px;
  height: 600px;
  background: #141414;
  position: relative;
  transform: rotate(0deg);
  transform-origin: 50% 50%;
  border-radius: 50%;
  margin: 0 auto;
  padding-top: 50px;
  z-index: -1;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
    left: 8vw;
    padding-top: 50px;
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
`;

const SmsLmsMMSFaxEmail = styled.div`
  width: 500px;
  height: 500px;
  background: #141414;
  border-radius: 50%;
  margin: 0 auto;
  padding-top: 100px;
  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
    padding-top: 25px;
  }
`;

const MoneCoreCircleFunction = styled.div`
  width: 300px;
  height: 300px;
  background: peru;
  border-radius: 50%;
  margin: auto;
  padding-top: 75px;
  @media only screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
    padding-top: 37.5px;
  }
`;

const JuBBsu = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: 190px;
  left: 225px;
  transform: rotate(310deg) scale(1.5, 1.5);
  transform-origin: 50% 100%;
  /* transform: scale(3, 3); */
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  border-top: 110px solid yellowgreen;
  border-radius: 50%;
  /* z-index: 5; */
`;

const BunBae = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: 190px;
  left: 225px;
  transform: rotate(50deg) scale(1.5, 1.5);
  transform-origin: 50% 100%;
  /* transform: scale(3, 3); */
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  border-top: 110px solid yellowgreen;
  border-radius: 50%;
  /* z-index: 5; */
`;

const TongJi = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: 190px;
  left: 225px;
  transform: rotate(220deg) scale(1.5, 1.5);
  transform-origin: 50% 100%;
  /* transform: scale(3, 3); */
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  border-top: 110px solid yellowgreen;
  border-radius: 50%;
  /* z-index: 5; */
`;

const MoneCoreCircle = styled.div`
  width: 150px;
  height: 150px;
  background: red;
  border-radius: 50%;
  margin: auto;
  padding: 65px;
  text-align: center;
  z-index: 100;
  @media only screen and (max-width: 768px) {
    width: 75px;
    height: 75px;
    padding-top: 30px;
  }
`;

const MoneCoreCircle1 = styled.div`
  width: 150px;
  height: 150px;
  background: red;
  border-radius: 50%;
  margin: auto;
  padding: 65px;
  text-align: center;
  z-index: 100;
  @media only screen and (max-width: 768px) {
    width: 75px;
    height: 75px;
    padding-top: 30px;
  }
`;

const Focus = styled.div`
  width: 20px;
  height: 20px;
  background: black;
  border-radius: 50%;
  margin: auto;
  /* padding-top: 60px; */
  text-align: center;
`;

const MoneCoreTitle = styled.div`
  color: white;
  font-size: 30px;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
const ProductPresenter = () => (
  <Container>
    <ProductDiv>
      <BusinessPart>
        <SmsLmsMMSFaxEmail>
          <MoneCoreCircleFunction>
            <JuBBsu></JuBBsu>
            <BunBae></BunBae>
            <TongJi></TongJi>
            <MoneCoreCircle>
              <MoneCoreTitle>
                <Focus></Focus>
              </MoneCoreTitle>
            </MoneCoreCircle>
          </MoneCoreCircleFunction>
        </SmsLmsMMSFaxEmail>
        <KTLGSKandOthers></KTLGSKandOthers>
        <WebFileEAIDBTcpIp></WebFileEAIDBTcpIp>
      </BusinessPart>
    </ProductDiv>
  </Container>
);

export default ProductPresenter;
