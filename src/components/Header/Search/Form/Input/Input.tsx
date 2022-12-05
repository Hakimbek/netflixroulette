import React from "react";
import styles from "./input.module.css";

function Input() {
  return (
    <input
      className={styles.input}
      type={"text"}
      placeholder={"What do you want to watch?"}
    />
  );
}

export default Input;
