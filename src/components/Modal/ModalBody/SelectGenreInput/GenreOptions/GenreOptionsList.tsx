import styles from "../selectGenreInput.module.css";
import GenreOption from "./GenreOption";
import DropDownListProps from "../../../../../types/dropDownList.types";

function GenreOptionsList({
  options,
  toggle,
  handleSelectedOption,
}: DropDownListProps) {
  return (
    <div className={styles.genreOptionsList}>
      {toggle &&
        options.map((option, index) => (
          <GenreOption key={index} handleSelectedOption={handleSelectedOption}>
            {option}
          </GenreOption>
        ))}
    </div>
  );
}

export default GenreOptionsList;
