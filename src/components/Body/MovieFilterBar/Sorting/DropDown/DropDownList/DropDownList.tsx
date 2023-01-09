import DropDownItem from "./DropDownItem";

type DropDownListPropsType = {
  options: string[];
  toggle: boolean;
  handleSelectedOption: (option: string) => void;
};

import styles from "../dropDown.module.css";

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
