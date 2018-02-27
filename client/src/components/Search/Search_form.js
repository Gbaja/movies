import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Styled from "styled-components";

const SearchForm = Styled.form`
  align-self: center
`;

const SearchInput = Styled.input`
padding: 7px;
border: 2px solid lightsteelblue;
width: 140px;
font-size: 1rem
`;
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
      <SearchForm onSubmit={this.handleSubmit}>
        <SearchInput
          placeholder="Search for a movie"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </SearchForm>
    );
  }
}

export default withRouter(Search_form);
