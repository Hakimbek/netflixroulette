import React from "react";
import movies from "../../../assets/movies/movies";
import { Component } from "react";
import MovieCard from "./MovieCard/MovieCard";
import { MovieCardsState, MovieCardsProps } from "./movieCards.types";
import styles from "./movieCadrds.module.css";

class MovieCards extends Component<MovieCardsProps, MovieCardsState> {
  state: MovieCardsState = {
    movies: [],
  };

  componentDidMount() {
    this.setState({ movies });
  }

  render() {
    return (
      <div className={styles.movieCards}>
        {this.state.movies.map((movie) => (
          <MovieCard
            key={movie.id}
            imageUrl={movie.imageUrl}
            name={movie.name}
            year={movie.year}
            genre={movie.genre}
          />
        ))}
      </div>
    );
  }
}

export default MovieCards;
