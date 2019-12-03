import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(10, 30, 40, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  @media only screen and (max-width: 768px) {
    width: 100%;

    align-items: center;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin-right: 100px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-right: 10px;
    justify-content: space-between;
  }
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  @media only screen and (max-width: 768px) {
    margin: 10px;
  }
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">어다인</SLink>
      </Item>
      <Item current={pathname === "/company"}>
        <SLink to="/company">회사소개</SLink>
      </Item>
      <Item current={pathname === "/product"}>
        <SLink to="/product">제품소개</SLink>
      </Item>
    </List>
  </Header>
));
