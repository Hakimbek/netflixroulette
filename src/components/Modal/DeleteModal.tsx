import styles from "./modal.module.css";
import ModalHeader from "./ModalHeader/ModalHeader";
import { ModalProps } from "../../types/modal.types";

function DeleteModal({ title, toggle, handleToggle }: ModalProps) {
  return (
    <>
      {toggle && (
        <>
          <div className={styles.modal_opacity}></div>
          <div className={styles.deleteModal}>
            <ModalHeader title={title} handleToggle={handleToggle} />
            <p>Are you sure you want delete this movie?</p>
            <button className={styles.modalDelete_button}>Confirm</button>
          </div>
        </>
      )}
    </>
  );
}

export default DeleteModal;
