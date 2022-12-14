import { useEffect, useState } from "react";

import { MockMoviesArray } from "../../mockData/movies";
import { MovieType } from "../../types/movie.type";
import MoviesAmount from "../MoviesAmount/MoviesAmount";
import MovieCard from "./MovieCard/MovieCard";

import styles from "./movieCadrds.module.css";

function MovieCards() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    setMovies(MockMoviesArray);
  }, []);

  return (
    <>
      <MoviesAmount moviesAmount={movies.length} />
      <div className={styles.movieCards}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default MovieCards;
