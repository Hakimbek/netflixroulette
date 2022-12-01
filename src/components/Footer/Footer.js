import React from "react";
import PropTypes from "prop-types";
import styles from "./footer.module.css";

function Footer(props) {
  return <div className={styles.footer_wrapper}>{props.children}</div>;
}

Footer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Footer;
