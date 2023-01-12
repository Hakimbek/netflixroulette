import DropDown from "./DropDown/DropDown";

import styles from "./sorting.module.css";

function Sorting() {
  return (
    <div className={styles.sorting}>
      <div className={styles.sorting_text}>Sort by:</div>
      <DropDown />
    </div>
  );
}

export default Sorting;
