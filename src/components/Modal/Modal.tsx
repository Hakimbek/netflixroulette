import ReactDOM from "react-dom";

import Button from "../common/Button/Button";
import ModalCloseButton from "../common/Modal/ModalCloseButtons/ModalCloseButton";
import ModalForm from "../common/Modal/ModalForm/ModalForm";

import styles from "./modal.module.css";

type ModalPropsType = {
  title: string;
  toggle: boolean;
  handleCloseButton: () => void;
};

function Modal({ title, toggle, handleCloseButton }: ModalPropsType) {
  if (toggle) {
    return ReactDOM.createPortal(
      <>
        <div className={styles.modal_opacity} />
        <div className={styles.modal_wrapper}>
          <div className={styles.modal_header}>
            <p className={styles.modal_title}>{title}</p>
            <ModalCloseButton handleButton={handleCloseButton} />
          </div>
          <ModalForm />
          <div className={styles.modal_footer}>
            <Button btnType={"btn_dark"}>Reset</Button>
            <Button btnType={"btn_danger"}>Submit</Button>
          </div>
        </div>
      </>,
      document.getElementById("modal-root") as HTMLElement
    );
  }
  return <></>;
}

export default Modal;
