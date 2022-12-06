import GenreWrapper from "./GenreFilter/GenreWrapper";
import Sorting from "./Sorting/Sorting";
import styles from "./moviesFilterBar.module.css";

function MoviesFilterBar() {
  return (
    <div className={styles.moviesFilterBar}>
      <GenreWrapper />
      <Sorting />
    </div>
  );
}

export default MoviesFilterBar;
