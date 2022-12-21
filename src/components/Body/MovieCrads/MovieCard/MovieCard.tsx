import { MovieType } from "../../../../types/movie.type";

import MovieSettings from "../../MovieSettings/MovieSettings";
import { openMovieDetails } from "../../../../redux/movieDetailsSlice";
import { selectMovie } from "../../../../redux/movieSlice";
import { useAppDispatch } from "../../../../redux/hooks";

import styles from "./movieCard.module.css";

type MoviePropsType = {
  movie: MovieType;
};

function MovieCard({ movie }: MoviePropsType) {
  const dispatch = useAppDispatch();

  const handleMovieClick = () => {
    dispatch(openMovieDetails());
    dispatch(selectMovie(movie.id));
  };

  return (
    <div className={styles.movieCard}>
      <div className={styles.movieCard_settings}>
        <MovieSettings />
      </div>
      <div className={styles.movieCard_imageWrapper} onClick={handleMovieClick}>
        <img
          className={styles.movieCard_image}
          src={movie.poster_path}
          alt="Url"
        />
      </div>
      <div className={styles.movieCard_title}>
        <div className={styles.movieCard_name}>{movie.title}</div>
        <div className={styles.movieCard_year}>
          {movie.release_date.slice(0, 4)}
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
