import MoviesAmount from "../../MoviesAmount/MoviesAmount";
import { useGetMoviesQuery } from "../../../redux/apiSlice";
import { Spinner } from "../../common/Spinner/Spinner";
import MovieCard from "./MovieCard/MovieCard";
import Error from "../../common/Error/Error";
import { useSearchParams } from "react-router-dom";

import styles from "./movieCadrds.module.css";

function MovieCards() {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "release_date";
  const searchQuery = searchParams.get("searchQuery") || "";
  const filterBy = searchParams.getAll("genre").join("%2C%20");

  const {
    data: movies,
    isLoading,
    isSuccess,
    isError,
  } = useGetMoviesQuery({ sortBy, filterBy, searchQuery });

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
    </>
  );
}

export default MovieCards;
