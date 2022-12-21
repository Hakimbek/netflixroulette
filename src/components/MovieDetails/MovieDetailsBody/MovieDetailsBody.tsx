import { useAppSelector } from "../../../redux/hooks";
import { selectMovieId } from "../../../redux/movieSlice";
import { useGetMovieQuery } from "../../../redux/apiSlice";
import { Spinner } from "../../common/Spinner/Spinner";

import styles from "./movieDetailsBody.module.css";

function MovieDetailsBody() {
  const movieId = useAppSelector(selectMovieId);
  const { data: movie, isFetching, isSuccess } = useGetMovieQuery(movieId);
  const hour = Math.trunc(Number(movie?.runtime) / 60);
  const minute = Number(movie?.runtime) % 60;

  let content;

  if (isFetching) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = (
      <div className={styles.movieDetails_bodyWrapper}>
        <div className={styles.movieDetails_leftCol}>
          <img
            src={movie?.poster_path}
            alt="Movie"
            className={styles.movieDetails_image}
          />
        </div>
        <div className={styles.movieDetails_rightCol}>
          <div className={styles.movieDetails_bodyWrapper}>
            <div className={styles.movieDetails_title}>{movie?.title}</div>
            <div className={styles.movieDetails_rating}>
              {movie?.vote_average}
            </div>
          </div>
          <div className={styles.movieDetails_genres}>
            {movie?.genres.map((genre, index) => (
              <p key={index} className={styles.movieDetails_genre}>
                {genre}
              </p>
            ))}
          </div>
          <div className={styles.movieDetails_bodyWrapper}>
            <div className={styles.movieDetails_release}>
              {movie?.release_date}
            </div>
            <div className={styles.movieDetails_runtime}>
              {Boolean(hour) && String(hour) + "h "}
              {minute && String(minute) + "min"}
            </div>
          </div>
          <div className={styles.movieDetails_overview}>{movie?.overview}</div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
}

export default MovieDetailsBody;
