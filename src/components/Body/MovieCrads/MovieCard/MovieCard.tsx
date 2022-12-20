import { useMoviesContext } from "../../../../stateManagement/store";
import { MovieType } from "../../../../types/movie.type";

import MovieSettings from "../../MovieSettings/MovieSettings";

import styles from "./movieCard.module.css";

type MoviePropsType = {
  movie: MovieType;
};

function MovieCard({ movie }: MoviePropsType) {
  const { selectMovie } = useMoviesContext();

  return (
    <div className={styles.movieCard}>
      <div className={styles.movieCard_settings}>
        <MovieSettings />
      </div>
      <div
        className={styles.movieCard_imageWrapper}
        onClick={() => selectMovie(movie)}
      >
        <img className={styles.movieCard_image} src={movie.url} alt="Url" />
      </div>
      <div className={styles.movieCard_title}>
        <div className={styles.movieCard_name}>{movie.title}</div>
        <div className={styles.movieCard_year}>{movie.release}</div>
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
