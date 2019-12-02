import React from "react";
import styled from "styled-components";

const Footer = styled.header`
  color: white;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(10, 30, 40, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

export default () => <Footer>This is footer</Footer>;
