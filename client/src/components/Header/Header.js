import React, { Component } from "react";
import Styled from "styled-components";

const ReferencePara = Styled.p`
font-size: 0.6rem;
margin-left: 6px;
`;
const AnchorTag = Styled.a`
  text-decoration: none;
  color: inherit;
`;

class Header extends Component {
  render() {
    return (
      <header className="main">
        <p>Movies</p>
        <ReferencePara>
          Powered by{" "}
          <AnchorTag href="https://www.themoviedb.org/">THE MOVIE DB</AnchorTag>
        </ReferencePara>
      </header>
    );
  }
}

export default Header;
