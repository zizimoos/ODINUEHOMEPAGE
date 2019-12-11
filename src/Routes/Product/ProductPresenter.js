import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 0px;
`;
const ProductDiv = styled.div`
  width: 100vw;
  height: 700px;
  margin: 0 auto;
  /* background-color: #383f10; */
  position: relative;
`;

const BusinessPart = styled.div`
  width: 600px;
  height: 600px;
  background: red;
  border-radius: 50%;
  position: absolute;
  top: 50px;
  left: 30vw;
  padding-top: 100px;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
    left: 8vw;
    padding-top: 50px;
  }
`;

const SmsLmsMMSFaxEmail = styled.div`
  width: 400px;
  height: 400px;
  background: gray;
  border-radius: 50%;
  margin: auto;
  padding-top: 50px;
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
const MoneCoreCircle = styled.div`
  width: 150px;
  height: 150px;
  background: red;
  border-radius: 50%;
  margin: auto;
  padding-top: 60px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    width: 75px;
    height: 75px;
    padding-top: 30px;
  }
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
      <h1>Product</h1>
      <BusinessPart>
        <SmsLmsMMSFaxEmail>
          <MoneCoreCircleFunction>
            <MoneCoreCircle>
              <MoneCoreTitle>M1 Core</MoneCoreTitle>
            </MoneCoreCircle>
          </MoneCoreCircleFunction>
        </SmsLmsMMSFaxEmail>
      </BusinessPart>
    </ProductDiv>
  </Container>
);

export default ProductPresenter;
