import React from "react";
import styles from "./property.module.css";

function Property() {
  return (
    <div className={styles.property}>
      <p className={styles.property_text}>SORT BY</p>
      <p className={styles.property_text}>RELEASE DAY</p>
    </div>
  );
}

export default Property;
