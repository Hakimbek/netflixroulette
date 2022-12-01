import Sort from "./Sort/Sort";
import MovieCards from "./MovieCards/MovieCards";
import ErrorBoundary from "./ErrorBoundary";

function Main() {
  return (
    <>
      <Sort />
      <ErrorBoundary>
        <MovieCards />
      </ErrorBoundary>
    </>
  );
}

export default Main;
