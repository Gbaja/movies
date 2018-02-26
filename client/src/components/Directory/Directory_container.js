import React, { Component } from "react";
import { directoryRequest } from "../../helpers/api_requests";
import Directory from "./Directory";

class DirectoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }
  componentDidMount() {
    directoryRequest()
      .then(res => {
        const moviesResult = res.results.map(result => {
          const { id, original_title, poster_path, release_date } = result;
          return { id, original_title, poster_path, release_date };
        });
        this.setState({ movies: moviesResult });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <Directory moviesData={this.state.movies} />;
  }
}

export default DirectoryContainer;
