import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { injectGlobal } from "styled-components";
import Landing from "./components/Landing/Landing";
import Search_container from "./components/Search/Search_container";

injectGlobal`
* {
  margin:0;
  padding: 0;
}
`;
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/search/:movieSearched"
            component={Search_container}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
