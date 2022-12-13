import styles from "../dropDown.module.css";
import DropDownItem from "./DropDownItem";
import { DropDownListType } from "../../../../../types/sorting/dropDownList.type";

function DropDownList({
  options,
  toggle,
  handleSelectedOption,
}: DropDownListType) {
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
