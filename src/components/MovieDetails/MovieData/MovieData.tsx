import { MovieType } from "../../../types/movie/movie.types";
import styles from "./movieData.module.css";

function MovieData({ movie }: { movie: MovieType }) {
  return (
    <div className={styles.movieData_wrapper}>
      <div className={styles.movieData_imageWrapper}>
        <img
          src={movie.poster_path}
          alt="Movie"
          className={styles.movieData_image}
        />
      </div>
      <div className={styles.movieData_textWrapper}>
        <div className={styles.movieData_wrapper}>
          <div className={styles.movieData_title}>{movie.title}</div>
          <div className={styles.movieData_voteAverage}>
            {movie.vote_average}
          </div>
        </div>
        <div className={styles.movieData_genre}>{movie.genres}</div>
        <div className={styles.movieData_wrapper}>
          <div className={styles.movieData_releaseDate}>
            {movie.release_date}
          </div>
          <div className={styles.movieData_runtime}>{movie.runtime}</div>
        </div>
        <div className={styles.movieData_overview}>{movie.overview}</div>
      </div>
    </div>
  );
}

export default MovieData;
