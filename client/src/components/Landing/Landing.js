import React, { Component } from "react";
import DirectoryContainer from "../Directory/Directory_container";
import Header_container from "../Header/Header_container";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header_container />
        <DirectoryContainer />
      </div>
    );
  }
}

export default App;
