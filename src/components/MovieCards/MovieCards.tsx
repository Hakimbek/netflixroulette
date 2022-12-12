import { useEffect } from "react";
import MovieCard from "./MovieCard/MovieCard";
import styles from "./movieCadrds.module.css";
import { getMovies } from "../../redux/api/movieApiCalls";
import {
  selectAllMovies,
  selectMoviesStatus,
  selectError,
} from "../../redux/slice/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Spinner from "../common/Spinner/Spinner";

function MovieCards() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectAllMovies);
  const movieStatus = useAppSelector(selectMoviesStatus);
  const error = useAppSelector(selectError);

  useEffect(() => {
    if (movieStatus === "idle") {
      void dispatch(getMovies());
    }
  }, [dispatch, movieStatus]);

  let content;

  if (movieStatus === "loading") {
    content = <Spinner text={"Loading..."} size={"5em"} />;
  } else if (movieStatus === "succeeded") {
    content = (
      <div className={styles.movieCards}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  } else if (movieStatus === "failed") {
    content = <div>{error}</div>;
  }

  return <>{content}</>;
}

export default MovieCards;
