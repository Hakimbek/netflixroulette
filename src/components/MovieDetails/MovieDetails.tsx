import MovieDetailsHeader from "./MovieDetailsHeader/MovieDetailsHeader";
import MovieDetailsBody from "./MovieDetailsBody/MovieDetailsBody";

import styles from "./movieDetails.module.css";

function MovieDetails() {
  return (
    <div className={styles.movieDetails}>
      <MovieDetailsHeader />
      <MovieDetailsBody />
    </div>
  );
}

export default MovieDetails;
