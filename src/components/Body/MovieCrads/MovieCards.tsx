import { useEffect } from "react";

import { MockMoviesArray } from "../../../mockData/movies";
import { useMoviesContext } from "../../../stateManagement/store";
import MoviesAmount from "../../MoviesAmount/MoviesAmount";

import MovieCard from "./MovieCard/MovieCard";

import styles from "./movieCadrds.module.css";

function MovieCards() {
  const { moviesArray, load } = useMoviesContext();

  useEffect(() => {
    load(MockMoviesArray);
  }, [load]);

  return (
    <>
      <MoviesAmount moviesAmount={moviesArray.length} />
      <div className={styles.movieCards}>
        {moviesArray.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default MovieCards;
