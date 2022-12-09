import styles from "./modalFooter.module.css";

function ModalFooter() {
  return (
    <div className={styles.modalFooter}>
      <button
        className={`${styles.modalFooter_button} ${styles.modalFooter_resetButton}`}
      >
        Reset
      </button>
      <button
        className={`${styles.modalFooter_button} ${styles.modalFooter_submitButton}`}
      >
        Submit
      </button>
    </div>
  );
}

export default ModalFooter;
