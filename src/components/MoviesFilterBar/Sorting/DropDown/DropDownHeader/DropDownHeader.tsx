import collapseIconUp from "../../../../../assets/images/collapseIconUp.png";
import collapseIconDown from "../../../../../assets/images/collapseIconDown.png";
import styles from "../dropDown.module.css";
import { DropDownHeaderType } from "../../../../../types/sorting/dopDownHeader.type";

function DropDownHeader({
  toggle,
  handleToggle,
  selectedOption,
}: DropDownHeaderType) {
  return (
    <div className={styles.dropDown_header} onClick={() => handleToggle()}>
      {selectedOption}
      <img src={toggle ? collapseIconUp : collapseIconDown} alt="Select" />
    </div>
  );
}

export default DropDownHeader;
