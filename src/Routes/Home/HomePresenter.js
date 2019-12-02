import React from "react";
import styled from "styled-components";
import SuperiorityOne from "../../Component/SuperiorityOne";
import SuperiorityTwo from "../../Component/SuperiorityTwo";
import SuperiorityThree from "../../Component/SuperiorityThree";

const Container = styled.div`
  width: 900px;
  margin: 0 auto;
  margin-top: 50px;
`;
const MonePic = styled.div`
  width: 100%;
  height: 700px;
  background-color: #b0a8a6;
`;

const HomePresenter = () => (
  <Container>
    <h1>Home</h1>
    <MonePic>M1 설명도</MonePic>
    <SuperiorityOne> </SuperiorityOne>
    <SuperiorityTwo> 차별성 2</SuperiorityTwo>
    <SuperiorityThree> 차별성 3</SuperiorityThree>
  </Container>
);

export default HomePresenter;
