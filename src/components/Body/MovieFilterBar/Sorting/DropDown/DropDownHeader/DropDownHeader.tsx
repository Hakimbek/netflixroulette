import collapseIconDown from "../../../../../../assets/images/collapseIconDown.png";
import collapseIconUp from "../../../../../../assets/images/collapseIconUp.png";

import styles from "../dropDown.module.css";

type DropDownHeaderPropsType = {
  toggle: boolean;
  handleToggle: () => void;
  selectedOption: string;
};

function DropDownHeader({
  toggle,
  handleToggle,
  selectedOption,
}: DropDownHeaderPropsType) {
  return (
    <div className={styles.dropDown_header} onClick={() => handleToggle()}>
      {selectedOption}
      <img src={toggle ? collapseIconUp : collapseIconDown} alt="Select" />
    </div>
  );
}

export default DropDownHeader;
