import React from "react";
import styled from "styled-components";
import SuperiorityThree from "../../Component/SuperiorityThree";

const Container = styled.div`
  width: 100%;
  margin-top: 0px;
`;
// const ProductDiv = styled.div`
//   width: 100vw;
//   height: 700px;
//   margin: 0 auto;
//   background-color: #383f10;
// `;

const CustomerPresenter = () => (
  <Container>
    <SuperiorityThree> 차별성 3</SuperiorityThree>
  </Container>
);

export default CustomerPresenter;
