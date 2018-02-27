import React, { Component } from "react";

class Search_result extends Component {
  render() {
    return (
      <div>
        {this.props.moviesData.map(search => {
          return (
            <div key={search.id}>
              <p>Title: {search.original_title}</p>
              {search.poster_path ? (
                <img
                  src={`http://image.tmdb.org/t/p/w185//${search.poster_path}`}
                />
              ) : (
                false
              )}
              <p>Release date: {search.release_date}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Search_result;
