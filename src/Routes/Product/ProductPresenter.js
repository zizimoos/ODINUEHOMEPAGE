import React from "react";
import styled from "styled-components";
import Footer from "../../Component/Footer";

const Container = styled.div`
  width: 100%;

  margin-top: 50px;
`;
const ProductDiv = styled.div`
  width: 900px;
  height: 700px;
  margin: 0 auto;
  background-color: #383f10;
`;

const ProductPresenter = () => (
  <Container>
    <ProductDiv>
      <h1>Product</h1>
    </ProductDiv>
    <Footer />
  </Container>
);

export default ProductPresenter;
