import Sort from "./Sort/Sort";
import MovieCards from "./MovieCards/MovieCards";
import ErroBoundary from "./ErrorBoundary";

function Main() {
  return (
    <>
      <Sort />
      <ErroBoundary>
        <MovieCards />
      </ErroBoundary>
    </>
  );
}

export default Main;
