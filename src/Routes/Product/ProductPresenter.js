import React from "react";
import styled from "styled-components";
import YoutubeProduct from "../../Component/YoutubeProduct";

// const BACK_COLOR = "#141414";

const Container = styled.div`
  width: 100vw;
  height: 1500px;
  margin-top: 0px;
  background-color: black;
  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;
const ProductDiv = styled.div`
  width: 100vw;
  height: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  margin-left: 0px;
  /* background-color: #383f10; */
  position: relative;
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    height: 800px;
  }
`;

const ProductPresenter = () => (
  <Container>
    <ProductDiv>
      <YoutubeProduct></YoutubeProduct>
    </ProductDiv>
  </Container>
);

export default ProductPresenter;
