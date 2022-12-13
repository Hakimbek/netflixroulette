import styles from "../dropDown.module.css";
import { DropDownItemType } from "../../../../../types/sorting/dropDownItem.types";

function DropDownItem({ children, handleSelectedOption }: DropDownItemType) {
  return (
    <div
      className={styles.dropDown_item}
      onClick={() => handleSelectedOption(children)}
    >
      {children.optionName}
    </div>
  );
}

export default DropDownItem;
