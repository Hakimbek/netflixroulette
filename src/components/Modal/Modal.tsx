import ModalCloseButton from "../common/Modal/ModalCloseButtons/ModalCloseButton";
import ModalForm from "../common/Modal/ModalForm/ModalForm";
import { MovieType } from "../../types/movie.type";

import styles from "./modal.module.css";

type ModalPropsType = {
  title: string;
  handleCloseButton: () => void;
  movie: MovieType | null;
};

function Modal({ title, handleCloseButton, movie }: ModalPropsType) {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal_header}>
        <p className={styles.modal_title}>{title}</p>
        <ModalCloseButton handleButton={handleCloseButton} />
      </div>
      <ModalForm handleCloseButton={handleCloseButton} movie={movie} />
    </div>
  );
}

export default Modal;
