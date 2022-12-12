import styles from "../modalInpuits.module.css";
import { ModalTextInputPropsType } from "../../../../../types/modal/modalTextInput.types";
import React from "react";

function TextInput({
  value,
  label,
  placeholder,
  handleChange,
  width,
}: ModalTextInputPropsType) {
  return (
    <div className={styles.modal_inputLabel_wrapper}>
      <label className={styles.modalInputs_label}>{label}</label>
      <input
        value={value}
        style={{ width: `${width}` }}
        className={styles.modal_textInput}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
        }
      />
    </div>
  );
}

export default TextInput;
