import React from "react";

import styles from "../genre.module.css";

type GenreButtonPropsType = {
  children: string;
  active: boolean;
  addGenre: (children: string) => void;
  deleteGenre: (children: string) => void;
};

function GenreButton({
  children,
  active,
  addGenre,
  deleteGenre,
}: GenreButtonPropsType) {
  const handleButton = () => {
    if (active) {
      deleteGenre(children);
    } else {
      addGenre(children);
    }
  };

  const style: React.CSSProperties = active
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
