import styles from "./sorting.module.css";
import DropDown from "./DropDown/DropDown";

function Sorting() {
  return (
    <div className={styles.sorting}>
      <p className={styles.sorting_text}>Sort by:</p>
      <DropDown />
    </div>
  );
}

export default Sorting;
