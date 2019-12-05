import React from "react";
import styled from "styled-components";
import SuperiorityOne from "../../Component/SuperiorityOne";
import SuperiorityTwo from "../../Component/SuperiorityTwo";
import SuperiorityThree from "../../Component/SuperiorityThree";

const Container = styled.div`
  width: 100%;
  margin-top: 0px;
`;
const MonePic = styled.div`
  width: 100vw;
  height: 700px;
  margin: 0 auto;
  background-color: #b0a8a6;
`;

const HomePresenter = () => (
  <Container>
    <SuperiorityOne> </SuperiorityOne>
    <SuperiorityTwo> 차별성 2</SuperiorityTwo>
    <SuperiorityThree> 차별성 3</SuperiorityThree>
  </Container>
);

export default HomePresenter;
