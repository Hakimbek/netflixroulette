import MovieCard from "./MovieCard/MovieCard";
import styles from "./movieCadrds.module.css";
import MoviesAmount from "../MoviesAmount/MoviesAmount";
import { useEffect, useState } from "react";
import { MovieType } from "../../types/movie/movie.type";
import { MockMoviesArray } from "../../mockData/movies";

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
