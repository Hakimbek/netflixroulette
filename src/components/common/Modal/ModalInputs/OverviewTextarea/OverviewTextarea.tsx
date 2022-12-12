import styles from "../modalInpuits.module.css";
import React from "react";
import { ModalOverviewTextareaPropsType } from "../../../../../types/modal/modalOverviewTextarea.types";

function OverviewTextarea({
  value,
  placeholder,
  setValue,
}: ModalOverviewTextareaPropsType) {
  return (
    <div className={styles.modal_inputLabel_wrapper}>
      <label className={styles.modalInputs_label}>Overview</label>
      <textarea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value)
        }
        value={value}
        className={styles.modal_textarea}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default OverviewTextarea;
