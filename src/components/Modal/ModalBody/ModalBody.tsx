import WrapperSpaceBetween from "../../common/WrapperSpaceBetween/WrapperSpaceBetween";
import styles from "./modalBody.module.css";
import SelectGenreInput from "./SelectGenreInput/SelectGenreInput";

function ModalBody() {
  return (
    <>
      <WrapperSpaceBetween>
        <div className={styles.modalInputLabel_wrapper}>
          <label className={styles.modalBody_inputLabel}>Title</label>
          <input
            className={styles.modalBody_largeInput}
            placeholder={"Title"}
          />
        </div>
        <div className={styles.modalInputLabel_wrapper}>
          <label className={styles.modalBody_inputLabel}>Release</label>
          <input className={styles.modalBody_smallInput} placeholder={"Data"} />
        </div>
      </WrapperSpaceBetween>
      <WrapperSpaceBetween>
        <div className={styles.modalInputLabel_wrapper}>
          <label className={styles.modalBody_inputLabel}>Movie url</label>
          <input
            className={styles.modalBody_largeInput}
            placeholder={"https://"}
          />
        </div>
        <div className={styles.modalInputLabel_wrapper}>
          <label className={styles.modalBody_inputLabel}>Rating</label>
          <input className={styles.modalBody_smallInput} placeholder={"0-10"} />
        </div>
      </WrapperSpaceBetween>
      <WrapperSpaceBetween>
        <div className={styles.modalInputLabel_wrapper}>
          <label className={styles.modalBody_inputLabel}>Genre</label>
          <SelectGenreInput />
        </div>
        <div className={styles.modalInputLabel_wrapper}>
          <label className={styles.modalBody_inputLabel}>Runtime</label>
          <input
            className={styles.modalBody_smallInput}
            placeholder={"Minutes"}
          />
        </div>
      </WrapperSpaceBetween>
      <div className={styles.modalInputLabel_wrapper}>
        <label className={styles.modalBody_inputLabel}>Overview</label>
        <textarea
          className={styles.modalBody_textarea}
          placeholder={"Movie description"}
        ></textarea>
      </div>
    </>
  );
}

export default ModalBody;
