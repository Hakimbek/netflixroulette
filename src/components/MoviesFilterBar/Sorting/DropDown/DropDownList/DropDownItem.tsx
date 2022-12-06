import styles from "../dropDown.module.css";
import DropDownItemProps from "../../../../../types/dropDownItem.types";

function DropDownItem({ children, handleSelectedOption }: DropDownItemProps) {
  return (
    <div
      className={styles.dropDown_item}
      onClick={() => handleSelectedOption(children)}
    >
      {children}
    </div>
  );
}

export default DropDownItem;
