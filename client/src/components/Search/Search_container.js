import React, { Component } from "react";
import { searchRequest } from "../../helpers/api_requests";
import Movies from "../Movies";

class Search_container extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  componentDidMount() {
    const movie = this.props.match.params.movieSearched;
    searchRequest(movie)
      .then(res => {
        const searchResult = res.results.map(result => {
          const { id, original_title, poster_path, release_date } = result;
          return { id, original_title, poster_path, release_date };
        });
        this.setState({ movies: searchResult });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.movies);
    return (
      <div>
        <h1>Movies searched results</h1>
        <Movies moviesData={this.state.movies} />
      </div>
    );
  }
}

export default Search_container;
