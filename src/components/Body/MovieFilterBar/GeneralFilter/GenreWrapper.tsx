import { useState } from "react";

import GenreButton from "./GenreButton/GenreButton";
import { useAppDispatch } from "../../../../redux/hooks";
import { setFilterBy } from "../../../../redux/movieSlice";

import styles from "./genre.module.css";

function GenreWrapper() {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState("All");

  const handleGenreButton = (child: string) => {
    let filter = child;
    if (child === "All") {
      filter = "";
    }
    dispatch(setFilterBy(filter));
    setActive(child);
  };

  return (
    <div className={styles.genreWrapper}>
      <GenreButton active={active} setActive={handleGenreButton}>
        All
      </GenreButton>
      <GenreButton active={active} setActive={handleGenreButton}>
        Documentary
      </GenreButton>
      <GenreButton active={active} setActive={handleGenreButton}>
        Comedy
      </GenreButton>
      <GenreButton active={active} setActive={handleGenreButton}>
        Horror
      </GenreButton>
      <GenreButton active={active} setActive={handleGenreButton}>
        Crime
      </GenreButton>
    </div>
  );
}

export default GenreWrapper;
