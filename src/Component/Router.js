import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../Routes/Home";
import Company from "../Routes/Company";
import Product from "../Routes/Product";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/company" exact component={Company}></Route>
      <Route path="/product" exact component={Product}></Route>
      <Redirect from="*" to="/" />
    </Switch>
    <Footer></Footer>
  </Router>
);
