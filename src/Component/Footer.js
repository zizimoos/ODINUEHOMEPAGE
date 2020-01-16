import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  width: 100vw;
  height: 400px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  font-family: "Changa", sans-serif;
  margin: 0 auto;
  padding-left: 100px;
  padding-right: 100px;
  background-color: #003755;
  color: #bc6c6b;
  ㅍ
`;
const Title = styled.div`
  /* font-family: "Orbitron", sans-serif; */
  margin: 0 auto;
  margin: 20px;
  margin-top: 30px;
  margin-bottom: 40px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  font-weight: 200;
  color: whitesmoke;
  /* background-color: peru; */
  /* text-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8); */
`;

export default () => (
  <Footer>
    <Title>Follow Us</Title>
    <Title>Connect Us</Title>
    <Title>Address</Title>
    <Title>Address</Title>
  </Footer>
);
