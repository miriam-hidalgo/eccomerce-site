import React, { Component } from "react";
import Login from "./Login";
// import CustomersList from "./CustomersList";
import NavBar from "./NavBar";
// import ShoppingCart from "./ShoppingCart";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Login />
      </React.Fragment>
    );
  }
}
