import styles from "./modalHeader.module.css";
import closeIcon from "../../../../assets/images/closeIcon.png";
import { ModalHeaderPropsType } from "../../../../types/modal/modalHeader.types";

function ModalHeader({ title, handleToggle }: ModalHeaderPropsType) {
  return (
    <div className={styles.modalHeader_wrapper}>
      <p className={styles.modalHeader_title}>{title}</p>
      <button
        onClick={() => handleToggle()}
        className={styles.modalHeader_closeButton}
      >
        <img src={closeIcon} alt="close" />
      </button>
    </div>
  );
}

export default ModalHeader;
