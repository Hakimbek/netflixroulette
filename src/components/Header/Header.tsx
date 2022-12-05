import React from "react";
import Search from "./Search/Search";
import Title from "./Title/Title";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Title />
      <Search />
    </div>
  );
}

export default Header;
