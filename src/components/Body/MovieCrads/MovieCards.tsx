import MoviesAmount from "../../MoviesAmount/MoviesAmount";
import { useGetMoviesQuery } from "../../../redux/apiSlice";
import { Spinner } from "../../common/Spinner/Spinner";
import MovieCard from "./MovieCard/MovieCard";
import {
  selectSortBy,
  selectSortOrder,
  selectFilterBy,
} from "../../../redux/movieSlice";
import { selectOffset } from "../../../redux/paginationSlice";
import { useAppSelector } from "../../../redux/hooks";
import Pagination from "../Pagination/Pagination";
import Error from "../../common/Error/Error";

import styles from "./movieCadrds.module.css";

function MovieCards() {
  const sortBy = useAppSelector(selectSortBy);
  const sortOrder = useAppSelector(selectSortOrder);
  const filterBy = useAppSelector(selectFilterBy).join("%2C%20");
  const offset = useAppSelector(selectOffset);
  const queryParam = { sortBy, sortOrder, filterBy, offset };
  const {
    data: movies,
    isLoading,
    isSuccess,
    isError,
  } = useGetMoviesQuery(queryParam);

  let content;

  if (isLoading) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = movies.data.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ));
  } else if (isError) {
    content = <Error>Something went wrong.</Error>;
  }

  return (
    <>
      <MoviesAmount moviesAmount={movies?.totalAmount || 0} />
      <div className={styles.movieCards}>{content}</div>
      <Pagination total={movies?.totalAmount || 0} />
    </>
  );
}

export default MovieCards;
