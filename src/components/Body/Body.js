import React from "react";
import Sort from "./Sort/Sort";
import MovieCards from "./MovieCards/MovieCards";
import styles from "./body.module.css";

function Body() {
  return (
    <div className={styles.body_wrapper}>
      <Sort />
      <MovieCards />
    </div>
  );
}

export default Body;
