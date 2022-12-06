import styles from "./movieCard.module.css";
import { MovieCardProps } from "../../../types/movieCard.types";
import MovieSettingButton from "./MovieSettingButton/MovieSettingButton";

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className={styles.movieCard}>
      <MovieSettingButton />
      <img className={styles.movieCard_image} src={movie.imageUrl} alt="Url" />
      <div className={styles.movieCard_title}>
        <p className={styles.movieCard_name}>{movie.name}</p>
        <p className={styles.movieCard_year}>{movie.year}</p>
      </div>
      <p className={styles.movieCard_genre}>{movie.genre}</p>
    </div>
  );
}

export default MovieCard;
