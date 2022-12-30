import { useState } from "react";

import styles from "./selectGenreInput.module.css";

type ModalOptionPropsType = {
  optionName: string;
  genres: string[];
  addGenre: (genreOption: string) => void;
  removeGenre: (genreOption: string) => void;
};

function ModalOption({
  optionName,
  genres,
  addGenre,
  removeGenre,
}: ModalOptionPropsType) {
  const [toggle, setToggle] = useState(genres.includes(optionName));

  const handleCheckbox = () => {
    if (toggle) {
      removeGenre(optionName);
    } else {
      addGenre(optionName);
    }
    setToggle((prev) => !prev);
  };

  return (
    <div className={styles.genreOption}>
      <input checked={toggle} type="checkbox" onChange={handleCheckbox} />
      <div>{optionName}</div>
    </div>
  );
}

export default ModalOption;
