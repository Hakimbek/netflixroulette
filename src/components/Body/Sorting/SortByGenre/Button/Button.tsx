import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
  children: string;
};

function Button({ children }: ButtonProps) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
