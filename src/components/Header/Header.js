import React from "react";
import Title from "./Title/Title";
import Search from "./Search/Search";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header_wrapper}>
      <Title />
      <Search />
    </div>
  );
}

export default Header;
