import collapseIconUp from "../../../../../assets/images/collapseIconUp.png";
import collapseIconDown from "../../../../../assets/images/collapseIconDown.png";
import styles from "../dropDown.module.css";
import DropDownHeaderProps from "../../../../../types/dopDownHeader.types";

function DropDownHeader({
  toggle,
  handleToggle,
  selectedOption,
}: DropDownHeaderProps) {
  return (
    <div className={styles.dropDown_header} onClick={() => handleToggle()}>
      {selectedOption}
      <img src={toggle ? collapseIconUp : collapseIconDown} alt="Select" />
    </div>
  );
}

export default DropDownHeader;
