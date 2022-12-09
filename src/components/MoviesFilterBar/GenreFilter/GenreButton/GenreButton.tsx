import styles from "../genre.module.css";
import GenreButtonProps from "../../../../types/genreButton.types";

function GenreButton({ children }: GenreButtonProps) {
  return <button className={styles.genreButton}>{children}</button>;
}

export default GenreButton;
