import React from "react";
import Form from "./Form/Form";
import Text from "./Text/Text";
import styles from "./search.module.css";

function Search() {
  return (
    <div className={styles.search}>
      <Text />
      <Form />
    </div>
  );
}

export default Search;
