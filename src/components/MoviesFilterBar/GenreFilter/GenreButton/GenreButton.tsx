import styles from "../genre.module.css";
import { GenreButtonType } from "../../../../types/sorting/genreButton.type";
import React from "react";

function GenreButton({ children, active, setActive }: GenreButtonType) {
  const style: React.CSSProperties =
    active === children
      ? {
          borderBottom: "2px solid red",
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
