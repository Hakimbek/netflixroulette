import magnifierIcon from "../../assets/images/magnifierIcon.png";
import { useMoviesContext } from "../../stateManagement/store";
import Logo from "../common/Logo/Logo";

import styles from "./movieDetails.module.css";

function MovieDetails() {
  const { movie, handleToggle } = useMoviesContext();

  return (
    <div className={styles.movieDetails}>
      <div className={styles.movieDetails_wrapper}>
        <Logo />
        <button onClick={handleToggle} className={styles.magnifier}>
          <img src={magnifierIcon} alt="Magnifier" />
        </button>
      </div>
      <div className={styles.movieDetails_contentWrapper}>
        <div>
          <img
            src={movie?.url}
            alt="Movie"
            className={styles.movieDetails_image}
          />
        </div>
        <div className={styles.movieDetails_content}>
          <div className={styles.movieDetails_contentWrapper}>
            <div className={styles.movieDetails_title}>{movie?.title}</div>
            <div className={styles.movieDetails_rating}>{movie?.rating}</div>
          </div>
          <div className={styles.movieDetails_genres}>{movie?.genres}</div>
          <div className={styles.movieDetails_contentWrapper}>
            <div className={styles.movieDetails_release}>{movie?.release}</div>
            <div className={styles.movieDetails_runtime}>
              {movie?.runtime}min
            </div>
          </div>
          <div className={styles.movieDetails_overview}>{movie?.overview}</div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
