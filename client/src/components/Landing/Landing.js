import React, { Component } from "react";
import Header from "..//Header/Header";
import DirectoryContainer from "../Directory/Directory_container";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <DirectoryContainer />
      </div>
    );
  }
}

export default App;
