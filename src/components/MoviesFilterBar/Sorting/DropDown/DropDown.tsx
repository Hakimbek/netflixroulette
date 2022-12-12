import { useState } from "react";
import DropDownHeader from "./DropDownHeader/DropDownHeader";
import DropDownList from "./DropDownList/DropDownList";
import styles from "./dropDown.module.css";
import { OptionsTypes } from "../../../../types/sorting/options.types";
import { useAppDispatch } from "../../../../redux/hooks";
import { setSortProperties } from "../../../../redux/slice/moviesSlice";

function DropDown() {
  const dispatch = useAppDispatch();
  const options: Array<OptionsTypes> = [
    {
      optionName: "Nothing",
      sortBy: "",
      sortOrder: "",
    },
    {
      optionName: "Release Date(asc)",
      sortBy: "release_date",
      sortOrder: "asc",
    },
    {
      optionName: "Release Date(desc)",
      sortBy: "release_date",
      sortOrder: "desc",
    },
    {
      optionName: "Rating(asc)",
      sortBy: "vote_average",
      sortOrder: "asc",
    },
    {
      optionName: "Rating(desc)",
      sortBy: "vote_average",
      sortOrder: "desc",
    },
    {
      optionName: "Runtime(asc)",
      sortBy: "runtime",
      sortOrder: "asc",
    },
    {
      optionName: "Runtime(desc)",
      sortBy: "runtime",
      sortOrder: "desc",
    },
  ];
  const [toggle, setToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionsTypes>(
    options[0]
  );

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSelectedOption = (option: OptionsTypes) => {
    setSelectedOption(option);
    dispatch(setSortProperties(option));
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
