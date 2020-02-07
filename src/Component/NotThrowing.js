import React from "react";
import styled from "styled-components";

const NotThrowig = styled.div`
  width: 100vw;
  height: 500px;
  margin-top: 20px;
  padding: 50px;
  background-color: whitesmoke;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

const Slogan = styled.div`
  margin: 0 auto;
  margin: 20px;
  margin-top: 20px;
  margin-bottom: 0px;
  padding-top: 0px;
  text-align: center;
  font-family: "Changa", sans-serif;
  font-size: 60px;
  font-weight: 600;
  /* color: #2574a9;
  color: #cf000f; */
  color: #2c3f51;
  text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const SloganBig = styled.div`
  margin: 0 auto;
  margin: 20px;
  margin-top: 30px;
  margin-bottom: 0px;
  padding-top: 0px;
  text-align: center;
  font-family: "Changa", sans-serif;
  font-size: 80px;
  font-weight: 600;
  color: #cf000f;
  text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

export default () => (
  <NotThrowig>
    <Container>
      <Slogan>Just not throwing it away </Slogan>
      <Slogan>can be a small but</Slogan>
      <SloganBig>"Great start."</SloganBig>
    </Container>
  </NotThrowig>
);
