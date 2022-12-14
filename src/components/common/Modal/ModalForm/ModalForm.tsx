import ModalSelect from "./Select/ModalSelect";

import styles from "./modalInpuits.module.css";

function ModalForm() {
  return (
    <form action={"#"}>
      <div className={styles.modal_inputsWrapper}>
        <div className={styles.modal_inputLabel_wrapper}>
          <label className={styles.modal_label}>Title</label>
          <input
            className={styles.modal_input}
            type="text"
            placeholder={"Title"}
            style={{ width: "500px" }}
          />
        </div>
        <div className={styles.modal_inputLabel_wrapper}>
          <label className={styles.modal_label}>Release</label>
          <input
            className={styles.modal_input}
            type="text"
            placeholder={"YYYY-MM-DD"}
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <div className={styles.modal_inputsWrapper}>
        <div className={styles.modal_inputLabel_wrapper}>
          <label className={styles.modal_label}>Movie url</label>
          <input
            className={styles.modal_input}
            type="text"
            placeholder={"https://"}
            style={{ width: "500px" }}
          />
        </div>
        <div className={styles.modal_inputLabel_wrapper}>
          <label className={styles.modal_label}>Rating</label>
          <input
            className={styles.modal_input}
            type="text"
            placeholder={"0-10"}
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <div className={styles.modal_inputsWrapper}>
        <div className={styles.modal_inputLabel_wrapper}>
          <label className={styles.modal_label}>Genre</label>
          <ModalSelect />
        </div>
        <div className={styles.modal_inputLabel_wrapper}>
          <label className={styles.modal_label}>Runtime</label>
          <input
            className={styles.modal_input}
            type="text"
            placeholder={"Minutes"}
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <div className={styles.modal_inputLabel_wrapper}>
        <label className={styles.modal_label}>Overview</label>
        <textarea
          className={styles.modal_textarea}
          placeholder={"More details"}
        ></textarea>
      </div>
    </form>
  );
}

export default ModalForm;
