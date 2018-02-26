import React, { Component } from "react";

class Directory extends Component {
  render() {
    return (
      <div>
        {this.props.moviesData.map(movie => {
          return (
            <div key={movie.id}>
              <p>Title: {movie.original_title}</p>
              <img
                src={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`}
              />
              <p>Release date: {movie.release_date}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Directory;
