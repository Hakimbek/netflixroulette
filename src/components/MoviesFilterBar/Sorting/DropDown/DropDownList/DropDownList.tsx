import styles from "../dropDown.module.css";
import DropDownItem from "./DropDownItem";
import DropDownListProps from "../../../../../types/sorting/dropDownList.types";

function DropDownList({
  options,
  toggle,
  handleSelectedOption,
}: DropDownListProps) {
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
