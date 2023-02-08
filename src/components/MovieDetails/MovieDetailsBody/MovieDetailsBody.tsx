import { useAppSelector } from "../../../redux/hooks";
import { selectMovie } from "../../../redux/movieSlice";
import Poster from "../../common/Poster/Poster";
import { getRuntime } from "../../../utils/getRuntime";

import styles from "./movieDetailsBody.module.css";

function MovieDetailsBody() {
  const movie = useAppSelector(selectMovie);
  let content;
  if (movie) {
    content = (
      <div className={styles.movieDetails_bodyWrapper}>
        <div className={styles.movieDetails_leftCol}>
          <Poster posterPath={movie.poster_path} movieTitle={movie.title} />
        </div>
        <div className={styles.movieDetails_rightCol}>
          <div className={styles.movieDetails_bodyWrapper}>
            <div
              data-cy={"movieDetailsTitle"}
              className={styles.movieDetails_title}
            >
              {movie.title}
            </div>
            <div className={styles.movieDetails_rating}>
              {movie.vote_average}
            </div>
          </div>
          <div className={styles.movieDetails_genres}>
            {movie.genres.map((genre, index) => (
              <p key={index} className={styles.movieDetails_genre}>
                {genre}
              </p>
            ))}
          </div>
          <div className={styles.movieDetails_bodyWrapper}>
            <div className={styles.movieDetails_release}>
              {movie.release_date}
            </div>
            <div className={styles.movieDetails_runtime}>
              {getRuntime(movie.runtime)}
            </div>
          </div>
          <div className={styles.movieDetails_overview}>{movie.overview}</div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
}

export default MovieDetailsBody;
