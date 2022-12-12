import GenreButton from "./GenreButton/GenreButton";
import styles from "./genre.module.css";
import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { setFilter } from "../../../redux/slice/moviesSlice";

function GenreWrapper() {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState("All");

  const handleGenreButton = (child: string) => {
    setActive(child);
    if (child === "All") {
      child = "";
    }
    dispatch(setFilter(child.toLowerCase()));
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
