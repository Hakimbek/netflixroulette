import { useState } from "react";
import styles from "./selectGenreInput.module.css";
import ModalOption from "./ModalOption";
import { ModalSelectType } from "../../../../../types/modal/modalSelect.type";

function ModalSelect({ genre, setGenre }: ModalSelectType) {
  const [selectToggle, setSelectToggle] = useState(false);

  const [documentary, setDocumentary] = useState(false);
  const [horror, setHorror] = useState(false);
  const [comedy, setComedy] = useState(false);
  const [crime, setCrime] = useState(false);

  return (
    <div>
      <label className={styles.modalBody_inputLabel}>Genre</label>
      <div
        className={styles.selectedGenre}
        onClick={() => setSelectToggle(!selectToggle)}
      >
        {genre.map((value) => value + " ")}
      </div>
      {selectToggle && (
        <div className={styles.genreOptionsList}>
          <ModalOption
            optionName={"Documentary"}
            genre={genre}
            setGenre={setGenre}
            checked={documentary}
            setChecked={setDocumentary}
          />
          <ModalOption
            optionName={"Crime"}
            genre={genre}
            setGenre={setGenre}
            checked={crime}
            setChecked={setCrime}
          />
          <ModalOption
            optionName={"Horror"}
            genre={genre}
            setGenre={setGenre}
            checked={horror}
            setChecked={setHorror}
          />
          <ModalOption
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

export default ModalSelect;
