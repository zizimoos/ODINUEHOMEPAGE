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
`;

const SmsLmsMMSFaxEmail = styled.div`
  width: 400px;
  height: 400px;
  background: gray;
  border-radius: 50%;
  margin: auto;
  padding-top: 10px;
`;

const MoneCoreCircleFunction = styled.div`
  width: 300px;
  height: 300px;
  background: peru;
  border-radius: 50%;
  margin: auto;
`;
const MoneCoreCircle = styled.div`
  width: 150px;
  height: 150px;
  background: red;
  border-radius: 50%;
  margin: auto;
`;

const MoneCoreTitle = styled.div`
  color: white;
  font-size: 30px;
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
