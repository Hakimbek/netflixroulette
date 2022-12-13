import styles from "./movieCard.module.css";
import MovieSettings from "./MovieSettings/MovieSettings";
import { MoviePropsType } from "../../../types/movie/movie.type";

function MovieCard({ movie }: MoviePropsType) {
  return (
    <div className={styles.movieCard}>
      <MovieSettings movieId={movie.id} />
      <div className={styles.movieCard_imageWrapper}>
        <img className={styles.movieCard_image} src={movie.url} alt="Url" />
      </div>
      <div className={styles.movieCard_title}>
        <div className={styles.movieCard_name}>{movie.title}</div>
        <div className={styles.movieCard_year}>{movie.release}</div>
      </div>
      <p>{movie.genres}</p>
    </div>
  );
}

export default MovieCard;
