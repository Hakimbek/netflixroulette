import { SortingOptionsType } from "../../../../../../types/sortingOptions.type";

import styles from "../dropDown.module.css";

type DropDownItemPropsType = {
  children: SortingOptionsType;
  handleSelectedOption: (option: SortingOptionsType) => void;
};

function DropDownItem({
  children,
  handleSelectedOption,
}: DropDownItemPropsType) {
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
