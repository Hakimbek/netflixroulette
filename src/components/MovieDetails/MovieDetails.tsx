import magnifierIcon from "../../assets/images/magnifierIcon.png";
import { useMoviesContext } from "../../stateManagement/store";
import Logo from "../common/Logo/Logo";

import styles from "./movieDetails.module.css";

function MovieDetails() {
  const { selectedMovie, closeMovieDetails } = useMoviesContext();

  const hour = Math.trunc(Number(selectedMovie?.runtime) / 60);
  const minute = Number(selectedMovie?.runtime) % 60;

  return (
    <div className={styles.movieDetails}>
      <div className={styles.movieDetails_wrapper}>
        <Logo />
        <button onClick={closeMovieDetails} className={styles.magnifier}>
          <img src={magnifierIcon} alt="Magnifier" />
        </button>
      </div>
      <div className={styles.movieDetails_contentWrapper}>
        <div>
          <img
            src={selectedMovie?.url}
            alt="Movie"
            className={styles.movieDetails_image}
          />
        </div>
        <div className={styles.movieDetails_content}>
          <div className={styles.movieDetails_contentWrapper}>
            <div className={styles.movieDetails_title}>
              {selectedMovie?.title}
            </div>
            <div className={styles.movieDetails_rating}>
              {selectedMovie?.rating}
            </div>
          </div>
          <div className={styles.movieDetails_genres}>
            {selectedMovie?.genres.map((genre, index) => (
              <p key={index} className={styles.movieDetails_genre}>
                {genre}
              </p>
            ))}
          </div>
          <div className={styles.movieDetails_contentWrapper}>
            <div className={styles.movieDetails_release}>
              {selectedMovie?.release}
            </div>
            <div className={styles.movieDetails_runtime}>
              {Boolean(hour) && String(hour) + "h "}
              {minute && String(minute) + "min"}
            </div>
          </div>
          <div className={styles.movieDetails_overview}>
            {selectedMovie?.overview}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
