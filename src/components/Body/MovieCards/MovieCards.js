import React, { Component } from "react";
import MovieCard from "./MovieCard/MovieCard";
import styles from "./movieCards.module.css";
import movies from "../../../../assets/movies";

class MovieCards extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  componentDidMount() {
    this.setState({ movies });
  }

  render() {
    return (
      <div className={styles.movie_cards__wrapper}>
        {this.state.movies.map((data) => (
          <MovieCard
            imageUrl={data.imageUrl}
            name={data.name}
            genre={data.genre}
            year={data.year}
            key={data.id}
          />
        ))}
      </div>
    );
  }
}

export default MovieCards;
