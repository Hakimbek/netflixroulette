import { useState } from "react";

import { SortingOptionsType } from "../../../../types/sortingOptions.type";
import DropDownHeader from "./DropDownHeader/DropDownHeader";
import DropDownList from "./DropDownList/DropDownList";
import { sortingOptions } from "./sortingOptions";

import styles from "./dropDown.module.css";

function DropDown() {
  const [toggle, setToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SortingOptionsType>(
    sortingOptions[0]
  );

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSelectedOption = (option: SortingOptionsType) => {
    setSelectedOption(option);
    handleToggle();
  };

  return (
    <div className={styles.dropDown_wrapper}>
      <DropDownHeader
        toggle={toggle}
        handleToggle={handleToggle}
        selectedOption={selectedOption.optionName}
      />
      <DropDownList
        options={sortingOptions}
        toggle={toggle}
        handleSelectedOption={handleSelectedOption}
      />
    </div>
  );
}

export default DropDown;
