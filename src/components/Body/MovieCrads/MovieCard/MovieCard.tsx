import { useMoviesContext } from "../../../../stateManagement/store";
import { MovieType } from "../../../../types/movie.type";

import MovieSettings from "./MovieSettings/MovieSettings";

import styles from "./movieCard.module.css";

type MoviePropsType = {
  movie: MovieType;
};

function MovieCard({ movie }: MoviePropsType) {
  const { clickMovie } = useMoviesContext();

  return (
    <div className={styles.movieCard}>
      <MovieSettings />
      <div
        className={styles.movieCard_imageWrapper}
        onClick={() => clickMovie(movie)}
      >
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
