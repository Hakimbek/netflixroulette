import React from "react";
import Button from "./Button/Button";
import styles from "./genre.module.css";

function Genre() {
  return (
    <div className={styles.genre}>
      <Button>ALL</Button>
      <Button>DOCUMENTARY</Button>
      <Button>COMEDY</Button>
      <Button>HORROR</Button>
      <Button>CRIME</Button>
    </div>
  );
}

export default Genre;
