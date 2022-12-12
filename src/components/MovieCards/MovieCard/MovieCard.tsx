import styles from "./movieCard.module.css";
import MovieSettings from "./MovieSettings/MovieSettings";
import { MovieCardPropsType } from "../../../types/movie/movieCard.types";
import { useAppDispatch } from "../../../redux/hooks";
import { openMovieDetails } from "../../../redux/slice/movieDetailsSlice";

function MovieCard({ movie }: MovieCardPropsType) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.movieCard}>
      <MovieSettings movieId={movie.id} />
      <div
        className={styles.movieCard_imageWrapper}
        onClick={() => dispatch(openMovieDetails(movie))}
      >
        <img
          className={styles.movieCard_image}
          src={movie.poster_path}
          alt="Url"
        />
      </div>
      <div className={styles.movieCard_title}>
        <div className={styles.movieCard_name}>{movie.title}</div>
        <div className={styles.movieCard_year}>{movie.release_date}</div>
      </div>
      <p>{movie.genres}</p>
    </div>
  );
}

export default MovieCard;
