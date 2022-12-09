import ModalHeader from "./ModalHeader/ModalHeader";
import ModalFooter from "./ModalFooter/ModalFooter";
import ModalBody from "./ModalBody/ModalBody";
import styles from "./modal.module.css";
import { ModalProps } from "../../types/modal.types";

function GeneralModal({ title, toggle, handleToggle }: ModalProps) {
  return (
    <>
      {toggle && (
        <>
          <div className={styles.modal_opacity}></div>
          <div className={styles.modal_wrapper}>
            <ModalHeader title={title} handleToggle={handleToggle} />
            <ModalBody />
            <ModalFooter />
          </div>
        </>
      )}
    </>
  );
}

export default GeneralModal;
