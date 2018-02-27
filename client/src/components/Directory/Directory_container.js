import React, { Component } from "react";
import { directoryRequest } from "../../helpers/api_requests";
import Movies from "../Movies";

class DirectoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }
  componentDidMount() {
    directoryRequest()
      .then(res => {
        const moviesResult = res.results.map(result => {
          const {
            id,
            original_title,
            poster_path,
            release_date,
            overview
          } = result;
          return { id, original_title, poster_path, release_date, overview };
        });
        this.setState({ movies: moviesResult });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Top movies </h1>
        <Movies moviesData={this.state.movies} />
      </div>
    );
  }
}

export default DirectoryContainer;
