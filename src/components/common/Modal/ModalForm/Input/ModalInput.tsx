import styles from "../modalInpuits.module.css";
import { ModalInputType } from "../../../../../types/modal/modalInput.type";
import React from "react";

function ModalInput({
  value,
  label,
  placeholder,
  handleChange,
  width,
}: ModalInputType) {
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

export default ModalInput;
