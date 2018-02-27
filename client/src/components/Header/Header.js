import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="main">
        <p>Movies</p>
        <p>
          Powered by <a href="https://www.themoviedb.org/">THE MOVIE DB</a>
        </p>
      </header>
    );
  }
}

export default Header;
