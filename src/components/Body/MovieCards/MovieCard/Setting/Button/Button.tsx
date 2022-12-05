import React from "react";
import settingIcon from "../../../../../../assets/images/settingIcon.png";
import styles from "./button.module.css";

function Button() {
  return (
    <button className={styles.button}>
      <img src={settingIcon} alt="Setting Icon" />
    </button>
  );
}

export default Button;
