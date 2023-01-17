import GenreButton from "./GenreButton/GenreButton";
import { filterOptions } from "./filterOptions";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./genre.module.css";

function GenreWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [genres, setGenres] = useState<string[]>(searchParams.getAll("genre"));

  useEffect(() => {
    setSearchParams((prev) => {
      prev.delete("genre");
      genres.forEach((genre) => prev.append("genre", genre));
      return prev;
    });
  }, [genres, setSearchParams]);

  const addGenre = (children: string) => {
    setGenres([...genres, children]);
  };

  const deleteGenre = (children: string) => {
    const newGenres = genres.filter((genre) => genre !== children);
    setGenres([...newGenres]);
  };

  return (
    <div className={styles.genreWrapper}>
      <button
        className={styles.genreButton}
        style={{ borderBottom: "2px solid var(--danger)" }}
      >
        All
      </button>
      {filterOptions.map((option, index) => (
        <GenreButton
          key={index}
          active={genres.includes(option)}
          addGenre={addGenre}
          deleteGenre={deleteGenre}
        >
          {option}
        </GenreButton>
      ))}
    </div>
  );
}

export default GenreWrapper;
