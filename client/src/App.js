import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Search_container from "./components/Search/Search_container";

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
