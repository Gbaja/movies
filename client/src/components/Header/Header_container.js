import React, { Component } from "react";
import Styled from "styled-components";
import Header from "./Header";
import Search_form from "../Search/Search_form";

const HeaderContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  background-color: maroon;
  color: navajowhite;
  padding: 20px 10px;
`;

class Header_container extends Component {
  render() {
    return (
      <HeaderContainer>
        <Header />
        <Search_form />
      </HeaderContainer>
    );
  }
}

export default Header_container;
