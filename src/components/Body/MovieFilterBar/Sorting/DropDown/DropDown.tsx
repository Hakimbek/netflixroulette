import { useState } from "react";
import DropDownHeader from "./DropDownHeader/DropDownHeader";
import DropDownList from "./DropDownList/DropDownList";
import { sortingOptions } from "./sortingOptions";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import {
  setSortBy,
  selectSortBy,
  selectFilterBy,
  selectMovie,
  selectSearchQuery,
} from "../../../../../redux/movieSlice";
import { useNavigate } from "react-router-dom";

import styles from "./dropDown.module.css";

function DropDown() {
  const navigate = useNavigate();
  const genre = useAppSelector(selectFilterBy);
  const movie = useAppSelector(selectMovie);
  const searchQuery = useAppSelector(selectSearchQuery);
  const dispatch = useAppDispatch();
  const sortBy = useAppSelector(selectSortBy);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSelectedOption = (option: string) => {
    dispatch(setSortBy(option));
    handleToggle();

    let to = "/search";

    if (searchQuery) {
      to += `/${searchQuery}`;
    }

    if (genre.length !== 0) {
      to += `/genre/${genre.join("&")}`;
    }

    if (option !== "nothing") {
      to += `/sortBy/${option}`;
    }

    if (movie) {
      to += `/movie/${movie.id}`;
    }

    navigate(to);
  };

  return (
    <div className={styles.dropDown_wrapper}>
      <DropDownHeader
        toggle={toggle}
        handleToggle={handleToggle}
        selectedOption={sortBy}
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
