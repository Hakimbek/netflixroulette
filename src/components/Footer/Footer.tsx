import React from "react";
import Logo from "../Header/Title/Logo/Logo";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <Logo />
    </div>
  );
}

export default Footer;
