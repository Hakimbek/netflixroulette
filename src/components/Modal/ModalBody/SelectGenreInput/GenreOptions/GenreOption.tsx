import styles from "../selectGenreInput.module.css";
import DropDownItemProps from "../../../../../types/dropDownItem.types";

function GenreOption({ children, handleSelectedOption }: DropDownItemProps) {
  return (
    <div
      className={styles.genreOption}
      onClick={() => handleSelectedOption(children)}
    >
      {children}
    </div>
  );
}

export default GenreOption;
