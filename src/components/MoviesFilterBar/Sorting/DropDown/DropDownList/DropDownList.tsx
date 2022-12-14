import { SortingOptionsType } from "../../../../../types/sortingOptions.type";
import DropDownItem from "./DropDownItem";

import styles from "../dropDown.module.css";

type DropDownListPropsType = {
  options: SortingOptionsType[];
  toggle: boolean;
  handleSelectedOption: (option: SortingOptionsType) => void;
};

function DropDownList({
  options,
  toggle,
  handleSelectedOption,
}: DropDownListPropsType) {
  return (
    <div className={styles.dropDown_list}>
      {toggle &&
        options.map((option, index) => (
          <DropDownItem key={index} handleSelectedOption={handleSelectedOption}>
            {option}
          </DropDownItem>
        ))}
    </div>
  );
}

export default DropDownList;
