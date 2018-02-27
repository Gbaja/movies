import React, { Component } from "react";
import Header from "./Header";
import Search_form from "../Search/Search_form";
class Header_container extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search_form />
      </div>
    );
  }
}

export default Header_container;
