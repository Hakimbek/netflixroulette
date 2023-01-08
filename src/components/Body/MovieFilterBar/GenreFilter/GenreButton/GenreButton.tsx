import React, { useEffect, useState } from "react";
import {
  selectFilterBy,
  selectMovie,
  selectSearchQuery,
  selectSortBy,
  setFilterBy,
} from "../../../../../redux/movieSlice";
import { setOffset, setPage } from "../../../../../redux/paginationSlice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { useNavigate, useParams } from "react-router-dom";

import styles from "../genre.module.css";

type GenreButtonPropsType = {
  children: string;
};

function GenreButton({ children }: GenreButtonPropsType) {
  const searchQuery = useAppSelector(selectSearchQuery);
  const movie = useAppSelector(selectMovie);
  const sortBy = useAppSelector(selectSortBy);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  let options = useAppSelector(selectFilterBy);
  const [toggle, setToggle] = useState(false);
  const { genre } = useParams();

  useEffect(() => {
    options.forEach((option) => {
      if (option === children) {
        setToggle(true);
      }
    });
  }, [children, options]);

  useEffect(() => {
    if (genre) {
      dispatch(setFilterBy([...genre.split("&")]));
    } else {
      setToggle(false);
    }
  }, [dispatch, genre]);

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
    let to = "/search";

    if (searchQuery) {
      to += `/${searchQuery}`;
    }

    if (options.length !== 0) {
      to += `/genre/${options.join("&")}`;
    }

    if (sortBy !== "nothing") {
      to += `/sortBy/${sortBy}`;
    }

    if (movie) {
      to += `/movie/${movie.id}`;
    }
    navigate(to);
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
