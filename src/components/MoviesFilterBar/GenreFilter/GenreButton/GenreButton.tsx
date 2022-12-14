import React from "react";

import styles from "../genre.module.css";

type GenreButtonPropsType = {
  children: string;
  active: string;
  setActive: (e: string) => void;
};

function GenreButton({ children, active, setActive }: GenreButtonPropsType) {
  const style: React.CSSProperties =
    active === children
      ? {
          borderBottom: "2px solid var(--danger)",
        }
      : {};

  return (
    <button
      className={styles.genreButton}
      style={style}
      onClick={() => setActive(children)}
    >
      {children}
    </button>
  );
}

export default GenreButton;
