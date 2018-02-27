import React, { Component } from "react";
import Styled from "styled-components";

const MoviesContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const EachMovieContainer = Styled.div`
  width: 250px;
  margin: 10px;
  text-align: center;
`;
class Directory extends Component {
  render() {
    return (
      <MoviesContainer>
        {this.props.moviesData.map(movie => {
          return (
            <EachMovieContainer key={movie.id}>
              <p>Title: {movie.original_title}</p>
              <p>Release date: {movie.release_date}</p>
              {movie.poster_path ? (
                <img
                  src={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`}
                />
              ) : (
                false
              )}
              <p> {movie.overview}</p>
            </EachMovieContainer>
          );
        })}
      </MoviesContainer>
    );
  }
}

export default Directory;
