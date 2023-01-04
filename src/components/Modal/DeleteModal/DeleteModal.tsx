import ReactDOM from "react-dom";

import Button from "../../common/Button/Button";
import ModalCloseButton from "../../common/Modal/ModalCloseButtons/ModalCloseButton";
import { useDeleteMovieMutation } from "../../../redux/apiSlice";

import modalStyles from "../modal.module.css";
import deleteModalStyles from "./deleteModal.module.css";

type DeleteModalPropsType = {
  toggle: boolean;
  handleCloseButton: () => void;
  movieId: number;
};

function DeleteModal({
  toggle,
  handleCloseButton,
  movieId,
}: DeleteModalPropsType) {
  const [deleteMovie] = useDeleteMovieMutation();

  if (toggle) {
    return ReactDOM.createPortal(
      <>
        <div className={modalStyles.modal_opacity}></div>
        <div className={deleteModalStyles.delete_modal}>
          <div className={modalStyles.modal_header}>
            <p className={modalStyles.modal_title}>Delete movie</p>
            <ModalCloseButton handleButton={handleCloseButton} />
          </div>
          <p className={deleteModalStyles.delete_text}>
            Are you sure you want delete this movie?
          </p>
          <div className={modalStyles.modal_footer}>
            <Button
              btnType={"btn_danger"}
              onClick={() => deleteMovie(movieId)}
            >
              Confirm
            </Button>
          </div>
        </div>
      </>,
      document.getElementById("modal-root") as HTMLElement
    );
  }
  return <></>;
}

export default DeleteModal;
