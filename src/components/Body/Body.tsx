import MovieCards from "./MovieCrads/MovieCards";
import MoviesFilterBar from "./MovieFilterBar/MoviesFilterBar";

import styles from "./body.module.css";

function Body() {
  return (
    <div className={styles.body}>
      <MoviesFilterBar />
      <MovieCards />
    </div>
  );
}

export default Body;
