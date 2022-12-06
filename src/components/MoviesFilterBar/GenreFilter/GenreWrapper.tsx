import GenreButton from "./GenreButton/GenreButton";
import styles from "./genre.module.css";

function GenreWrapper() {
  return (
    <div className={styles.genreWrapper}>
      <GenreButton>All</GenreButton>
      <GenreButton>Documentary</GenreButton>
      <GenreButton>Comedy</GenreButton>
      <GenreButton>Horror</GenreButton>
      <GenreButton>Crime</GenreButton>
    </div>
  );
}

export default GenreWrapper;
