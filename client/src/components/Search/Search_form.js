import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Search_form extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: "" };
  }

  handleChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSubmit = event => {
    const movieSearched = this.state.searchValue.split(" ").join("+");
    this.props.history.push(`/search/${movieSearched}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Search"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default withRouter(Search_form);
