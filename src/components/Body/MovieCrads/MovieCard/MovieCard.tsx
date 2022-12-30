import { MovieType } from "../../../../types/movie.type";
import { handleMovieClick } from "../../../../redux/movieSlice";
import MovieSettings from "../../MovieSettings/MovieSettings";
import { useAppDispatch } from "../../../../redux/hooks";
import Poster from "../../../common/Poster/Poster";

import styles from "./movieCard.module.css";

type MoviePropsType = {
  movie: MovieType;
};

function MovieCard({ movie }: MoviePropsType) {
  const dispatch = useAppDispatch();

  return (
    <div
      className={styles.movieCard}
      onClick={() => dispatch(handleMovieClick(movie))}
    >
      <div className={styles.movieCard_settings}>
        <MovieSettings />
      </div>
      <Poster posterPath={movie.poster_path} movieTitle={movie.title} />
      <div className={styles.movieCard_title}>
        <div className={styles.movieCard_name}>{movie.title}</div>
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
  );
}

export default MovieCard;
