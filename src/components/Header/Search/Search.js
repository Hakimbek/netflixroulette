import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import SearchText from "./SearchText";
import styles from "../header.module.css";

function Search() {
  return (
    <div className={styles.search_wrapper}>
      <SearchText>FIND YOUR MOVIE</SearchText>
      <SearchForm />
    </div>
  );
}

export default Search;
