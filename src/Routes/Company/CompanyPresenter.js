import React from "react";
import styled from "styled-components";
import Footer from "../../Component/Footer";

const Container = styled.div`
  width: 100%;

  margin-top: 50px;
`;

const CompanyDiv = styled.div`
  width: 900px;
  height: 700px;
  margin: 0 auto;
  background-color: #7937be;
`;

const CompanyPresenterPresenter = () => (
  <Container>
    <CompanyDiv>
      <h1>Company</h1>
    </CompanyDiv>
    <Footer />
  </Container>
);

export default CompanyPresenterPresenter;
