import styles from "./selectGenreInput.module.css";
import { useEffect } from "react";
import { GenreOptionPropsType } from "../../../../../types/modal/modalSelectGenreInput.types";

function GenreOption({
  optionName,
  genre,
  setGenre,
  checked,
  setChecked,
}: GenreOptionPropsType) {
  useEffect(() => {
    if (checked && !genre.includes(optionName)) {
      setGenre([...genre, optionName]);
    } else {
      setGenre(genre.filter((value) => value !== optionName));
    }
  }, [checked, genre, optionName, setGenre]);

  return (
    <div onClick={() => setChecked(!checked)} className={styles.genreOption}>
      <input checked={checked} type="checkbox" />
      <div>{optionName}</div>
    </div>
  );
}

export default GenreOption;
