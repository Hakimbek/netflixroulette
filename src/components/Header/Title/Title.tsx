import React from "react";
import Logo from "./Logo/Logo";
import Button from "./Button/Button";
import styles from "./title.module.css";

function Title() {
  return (
    <div className={styles.title}>
      <Logo />
      <Button />
    </div>
  );
}

export default Title;
