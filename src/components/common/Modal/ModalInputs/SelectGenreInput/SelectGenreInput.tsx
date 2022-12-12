import { useState } from "react";
import styles from "./selectGenreInput.module.css";
import GenreOption from "./GenreOption";
import { SelectGenreInputPropsType } from "../../../../../types/modal/modalSelectGenreInput.types";

function SelectGenreInput({ genre, setGenre }: SelectGenreInputPropsType) {
  const [toggle, setToggle] = useState(false);

  const [documentary, setDocumentary] = useState(false);
  const [horror, setHorror] = useState(false);
  const [comedy, setComedy] = useState(false);
  const [crime, setCrime] = useState(false);

  return (
    <div>
      <label className={styles.modalBody_inputLabel}>Genre</label>
      <div className={styles.selectedGenre} onClick={() => setToggle(!toggle)}>
        {genre.map((value) => value + " ")}
      </div>
      {toggle && (
        <div className={styles.genreOptionsList}>
          <GenreOption
            optionName={"Documentary"}
            genre={genre}
            setGenre={setGenre}
            checked={documentary}
            setChecked={setDocumentary}
          />
          <GenreOption
            optionName={"Crime"}
            genre={genre}
            setGenre={setGenre}
            checked={crime}
            setChecked={setCrime}
          />
          <GenreOption
            optionName={"Horror"}
            genre={genre}
            setGenre={setGenre}
            checked={horror}
            setChecked={setHorror}
          />
          <GenreOption
            optionName={"Comedy"}
            genre={genre}
            setGenre={setGenre}
            checked={comedy}
            setChecked={setComedy}
          />
        </div>
      )}
    </div>
  );
}

export default SelectGenreInput;
