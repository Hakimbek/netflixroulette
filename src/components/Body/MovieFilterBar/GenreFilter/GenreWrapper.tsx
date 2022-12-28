import GenreButton from "./GenreButton/GenreButton";
import { filterOptions } from "./filterOptions";

import styles from "./genre.module.css";

function GenreWrapper() {
  return (
    <div className={styles.genreWrapper}>
      <button
        className={styles.genreButton}
        style={{ borderBottom: "2px solid var(--danger)" }}
      >
        All
      </button>
      {filterOptions.map((option, index) => (
        <GenreButton key={index}>{option}</GenreButton>
      ))}
    </div>
  );
}

export default GenreWrapper;
