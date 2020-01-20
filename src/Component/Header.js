import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 10px;
  background-color: #2574a9;
  z-index: 100;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  @media only screen and (max-width: 768px) {
    width: 100vw;
    align-items: center;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin-right: 100px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
    justify-content: space-between;
  }
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  font-weight: 600;
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
  text-transform: uppercase;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Home</SLink>
      </Item>
      <Item current={pathname === "/product"}>
        <SLink to="/product">Cigarap</SLink>
      </Item>
      <Item current={pathname === "/customer"}>
        <SLink to="/customer">customer</SLink>
      </Item>
      <Item current={pathname === "/company"}>
        <SLink to="/company">company</SLink>
      </Item>
    </List>
  </Header>
));
