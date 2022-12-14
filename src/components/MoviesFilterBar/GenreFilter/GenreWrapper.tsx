import { useState } from "react";
import GenreButton from "./GenreButton/GenreButton";

import styles from "./genre.module.css";

function GenreWrapper() {
  const [active, setActive] = useState("All");

  const handleGenreButton = (child: string) => {
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
