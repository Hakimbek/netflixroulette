import React from "react";
import Button from "./Button";
import styles from "../modal.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <Button
        color={"#F65261"}
        backgroundColor={"#232323"}
        borderColor={"#F65261"}
      >
        RESET
      </Button>
      <Button
        color={"white"}
        backgroundColor={"#F65261"}
        borderColor={"#F65261"}
      >
        SUBMIT
      </Button>
    </div>
  );
}

export default Footer;
