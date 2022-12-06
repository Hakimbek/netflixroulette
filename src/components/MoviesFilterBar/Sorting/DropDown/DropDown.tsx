import { useState } from "react";
import DropDownHeader from "./DropDownHeader/DropDownHeader";
import DropDownList from "./DropDownList/DropDownList";
import styles from "./dropDown.module.css";

function DropDown() {
  const options = ["Title", "Release Date", "Rating", "Runtime"];
  const [toggle, setToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSelectedOption = (option: string) => {
    setSelectedOption(option);
    handleToggle();
  };

  return (
    <div className={styles.dropDown_wrapper}>
      <DropDownHeader
        toggle={toggle}
        handleToggle={handleToggle}
        selectedOption={selectedOption}
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
