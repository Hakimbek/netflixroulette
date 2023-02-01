import { MovieType } from "../../../../types/movie.type";
import { seeMovieDetails } from "../../../../redux/movieSlice";
import MovieSettings from "../../MovieSettings/MovieSettings";
import { useAppDispatch } from "../../../../redux/hooks";
import Poster from "../../../common/Poster/Poster";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

import styles from "./movieCard.module.css";

type MoviePropsType = {
  movie: MovieType;
};

function MovieCard({ movie }: MoviePropsType) {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieParam = searchParams.get("movie");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (movieParam && movieParam === String(movie.id)) {
      dispatch(seeMovieDetails(movie));
    }
  }, [dispatch, movie, movieParam]);

  const handleMovieDetails = () => {
    setSearchParams((prev) => {
      prev.set("movie", String(movie.id));
      return prev;
    });
    dispatch(seeMovieDetails(movie));
  };

  return (
    <div className={styles.movieCard}>
      <div className={styles.movieCard_settings}>
        <MovieSettings movie={movie} />
      </div>
      <div className={styles.movie_info} onClick={handleMovieDetails}>
        <Poster posterPath={movie.poster_path} movieTitle={movie.title} />
        <div className={styles.movieCard_title}>
          <div className={styles.movieCard_name} id={"movieCardTitle"}>
            {movie.title}
          </div>
          <div className={styles.movieCard_year}>
            {new Date(movie.release_date).getFullYear()}
          </div>
        </div>
        <div className={styles.movieCard_genres}>
          {movie.genres.map((genre, index) => (
            <p className={styles.movieCard_genre} key={index}>
              {genre}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
