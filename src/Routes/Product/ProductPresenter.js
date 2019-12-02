import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 900px;
  margin: 0 auto;
  margin-top: 50px;
`;
const ProductDiv = styled.div`
  width: 100%;
  height: 700px;
  background-color: #383f10;
`;

const ProductPresenter = () => (
  <Container>
    <ProductDiv>
      <h1>Product</h1>
    </ProductDiv>
  </Container>
);

export default ProductPresenter;
