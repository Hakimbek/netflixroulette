import React from "react";
import PropTypes from "prop-types";
import styles from "./header.module.css";

function WrapperLayout(props) {
  return <div className={styles.wrapper_layout}>{props.children}</div>;
}

WrapperLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default WrapperLayout;
