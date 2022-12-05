import React from "react";
import Genre from "./SortByGenre/Genre";
import Property from "./SortByProperty/Property";
import styles from "./sort.module.css";

function Sort() {
  return (
    <div className={styles.sort}>
      <Genre />
      <Property />
    </div>
  );
}

export default Sort;
