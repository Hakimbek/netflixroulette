import { MovieType } from "../../../../types/movie.type";
import {
  seeMovieDetails,
  selectFilterBy,
  selectSearchQuery,
  selectSortBy,
} from "../../../../redux/movieSlice";
import MovieSettings from "../../MovieSettings/MovieSettings";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import Poster from "../../../common/Poster/Poster";
import { Link, useParams } from "react-router-dom";

import { useEffect } from "react";

import styles from "./movieCard.module.css";

type MoviePropsType = {
  movie: MovieType;
};

function MovieCard({ movie }: MoviePropsType) {
  const options = useAppSelector(selectFilterBy);
  const searchQuery = useAppSelector(selectSearchQuery);
  const sortBy = useAppSelector(selectSortBy);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  let to = "/search";

  useEffect(() => {
    if (id && Number(id) === movie.id) {
      dispatch(seeMovieDetails(movie));
    }
  }, [dispatch, id, movie]);

  if (searchQuery) {
    to += `/${searchQuery}`;
  }

  if (options.length !== 0) {
    to += `/genre/${options.join("&")}`;
  }

  if (sortBy !== "nothing") {
    to += `/sortBy/${sortBy}`;
  }

  return (
    <div className={styles.movieCard}>
      <div className={styles.movieCard_settings}>
        <MovieSettings movie={movie} />
      </div>
      <div className={styles.movie_info}>
        <Link
          to={(to += `/movie/${movie.id}`)}
          onClick={() => dispatch(seeMovieDetails(movie))}
        >
          <Poster posterPath={movie.poster_path} movieTitle={movie.title} />
        </Link>
        <div className={styles.movieCard_title}>
          <div className={styles.movieCard_name}>{movie.title}</div>
          <div className={styles.movieCard_year}>
            {new Date(movie.release_date).getFullYear()}
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
    </div>
  );
}

export default MovieCard;
