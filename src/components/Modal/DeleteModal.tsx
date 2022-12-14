import ReactDOM from "react-dom";

import Button from "../common/Button/Button";
import ModalCloseButton from "../common/Modal/ModalCloseButtons/ModalCloseButton";

import styles from "./modal.module.css";

type DeleteModalPropsType = {
  toggle: boolean;
  handleCloseButton: () => void;
};

function DeleteModal({ toggle, handleCloseButton }: DeleteModalPropsType) {
  if (toggle) {
    return ReactDOM.createPortal(
      <>
        <div className={styles.modal_opacity}></div>
        <div className={styles.delete_modal}>
          <div className={styles.modal_header}>
            <p className={styles.modal_title}>Delete movie</p>
            <ModalCloseButton handleButton={handleCloseButton} />
          </div>
          <p className={styles.modal_text}>
            Are you sure you want delete this movie?
          </p>
          <div className={styles.modal_footer}>
            <Button btnType={"btn_danger"}>Confirm</Button>
          </div>
        </div>
      </>,
      document.getElementById("modal-root") as HTMLElement
    );
  }
  return <></>;
}

export default DeleteModal;
