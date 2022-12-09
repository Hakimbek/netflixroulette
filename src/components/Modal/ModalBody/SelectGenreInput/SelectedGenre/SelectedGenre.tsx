import { SelectedGenreProps } from "../../../../../types/selectGenreInput.types";
import styles from "../selectGenreInput.module.css";

function SelectedGenre({ handleToggle, selectedOption }: SelectedGenreProps) {
  return (
    <div className={styles.selectedGenre} onClick={() => handleToggle()}>
      {selectedOption}
    </div>
  );
}

export default SelectedGenre;
