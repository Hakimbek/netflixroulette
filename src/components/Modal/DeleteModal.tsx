import styles from "./modal.module.css";
import { DeleteModalType } from "../../types/modal/deleteModal.type";
import ModalCloseButton from "../common/Modal/ModalButtons/ModalCloseButton";

function DeleteModal({ toggle, handleCloseButton, movieId }: DeleteModalType) {
  const handleDeleteButton = (movieId: number) => {
    //  TODO: Implement delete func
  };

  return (
    <>
      {toggle && (
        <>
          <div className={styles.modal_opacity}></div>
          <div className={styles.deleteModal}>
            <div className={styles.modal_header}>
              <p className={styles.modal_title}>Add movie</p>
              <ModalCloseButton handleButton={handleCloseButton} />
            </div>
            <p>Are you sure you want delete this movie?</p>
            <button
              onClick={() => handleDeleteButton(movieId)}
              className={styles.modalDelete_button}
            >
              Confirm
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default DeleteModal;
