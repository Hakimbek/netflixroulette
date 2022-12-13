import { useState } from "react";
import DropDownHeader from "./DropDownHeader/DropDownHeader";
import DropDownList from "./DropDownList/DropDownList";
import styles from "./dropDown.module.css";
import { SortingOptionsType } from "../../../../types/sorting/sortingOptions.type";

function DropDown() {
  const options: Array<SortingOptionsType> = [
    {
      optionName: "Nothing",
      sortBy: "",
      sortOrder: "",
    },
    {
      optionName: "Release Date",
      sortBy: "release_date",
      sortOrder: "asc",
    },
    {
      optionName: "Rating",
      sortBy: "vote_average",
      sortOrder: "asc",
    },
    {
      optionName: "Runtime",
      sortBy: "runtime",
      sortOrder: "asc",
    },
  ];
  const [toggle, setToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SortingOptionsType>(
    options[0]
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
        options={options}
        toggle={toggle}
        handleSelectedOption={handleSelectedOption}
      />
    </div>
  );
}

export default DropDown;
