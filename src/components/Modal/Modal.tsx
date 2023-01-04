import ReactDOM from "react-dom";

import ModalCloseButton from "../common/Modal/ModalCloseButtons/ModalCloseButton";
import ModalForm from "../common/Modal/ModalForm/ModalForm";
import { MovieType } from "../../types/movie.type";

import styles from "./modal.module.css";

type ModalPropsType = {
  title: string;
  toggle: boolean;
  handleCloseButton: () => void;
  movie: MovieType | null;
};

function Modal({ title, toggle, handleCloseButton, movie }: ModalPropsType) {
  if (toggle) {
    return ReactDOM.createPortal(
      <>
        <div className={styles.modal_opacity} />
        <div className={styles.modal_wrapper}>
          <div className={styles.modal_header}>
            <p className={styles.modal_title}>{title}</p>
            <ModalCloseButton handleButton={handleCloseButton} />
          </div>
          <ModalForm handleCloseButton={handleCloseButton} movie={movie} />
        </div>
      </>,
      document.getElementById("modal-root") as HTMLElement
    );
  }
  return <></>;
}

export default Modal;
