import { useState } from "react";

import { options } from "./genreOptions";
import ModalOption from "./ModalOption";

import styles from "./selectGenreInput.module.css";

function ModalSelect() {
  const [selectToggle, setSelectToggle] = useState(false);

  return (
    <div>
      <div
        className={styles.selectedGenre}
        onClick={() => setSelectToggle(!selectToggle)}
      ></div>
      {selectToggle && (
        <div className={styles.genreOptionsList}>
          {options.map((option, index) => (
            <ModalOption key={index} optionName={option} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ModalSelect;
