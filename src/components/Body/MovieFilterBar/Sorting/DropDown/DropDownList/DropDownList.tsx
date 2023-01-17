import DropDownItem from "./DropDownItem";
import { sortingOptions } from "../sortingOptions";

type DropDownListPropsType = {
  toggle: boolean;
  handleToggle: () => void;
};

import styles from "../dropDown.module.css";

function DropDownList({ toggle, handleToggle }: DropDownListPropsType) {
  return (
    <div className={styles.dropDown_list}>
      {toggle &&
        sortingOptions.map((option, index) => (
          <DropDownItem key={index} handleToggle={handleToggle}>
            {option}
          </DropDownItem>
        ))}
    </div>
  );
}

export default DropDownList;
