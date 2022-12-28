import React, { useState } from "react";
import { setFilterBy, selectFilterBy } from "../../../../../redux/movieSlice";
import { setOffset, setPage } from "../../../../../redux/paginationSlice";
import { useAppSelector, useAppDispatch } from "../../../../../redux/hooks";

import styles from "../genre.module.css";

type GenreButtonPropsType = {
  children: string;
};

function GenreButton({ children }: GenreButtonPropsType) {
  const dispatch = useAppDispatch();
  let options = useAppSelector(selectFilterBy);
  const [toggle, setToggle] = useState(false);

  const handleButton = () => {
    if (toggle) {
      const newOptions = options.filter((option) => option !== children);
      options = [...newOptions];
    } else {
      options = [...options, children];
    }
    setToggle((prev) => !prev);
    dispatch(setFilterBy(options));
    dispatch(setOffset(0));
    dispatch(setPage(1));
  };

  const style: React.CSSProperties = toggle
    ? {
        borderBottom: "2px solid var(--danger)",
      }
    : {};

  return (
    <button className={styles.genreButton} style={style} onClick={handleButton}>
      {children}
    </button>
  );
}

export default GenreButton;
