import React from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";
import styles from "./form.module.css";

function Form() {
  return (
    <div className={styles.form}>
      <Input />
      <Button />
    </div>
  );
}

export default Form;
