import styles from "../modalInpuits.module.css";
import React from "react";
import { ModalTextareaType } from "../../../../../types/modal/modalTextarea.type";

function ModalTextarea({ value, handleChange }: ModalTextareaType) {
  return (
    <div className={styles.modal_inputLabel_wrapper}>
      <label className={styles.modalInputs_label}>Overview</label>
      <textarea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleChange(e.target.value)
        }
        value={value}
        className={styles.modal_textarea}
        placeholder={"More details"}
      ></textarea>
    </div>
  );
}

export default ModalTextarea;
