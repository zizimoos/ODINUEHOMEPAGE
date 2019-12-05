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
  background-color: #383f10;
`;

const CustomerPresenter = () => (
  <Container>
    <ProductDiv>
      <h1>Product</h1>
    </ProductDiv>
  </Container>
);

export default CustomerPresenter;
