import { useEffect, useState } from "react";
import MovieCard from "./MovieCard/MovieCard";
import moviesArray from "../../mockData/movies";
import { Movie } from "../../types/movieCard.types";
import styles from "./movieCadrds.module.css";

function MovieCards() {
  const [movies, setMovies] = useState<Movie[] | null>([] as Movie[]);

  useEffect(() => {
    setMovies(moviesArray);
  }, []);

  return (
    <div className={styles.movieCards}>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieCards;
