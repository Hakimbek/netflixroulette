import Button from "../../common/Button/Button";
import ModalCloseButton from "../../common/Modal/ModalCloseButtons/ModalCloseButton";
import { useDeleteMovieMutation } from "../../../redux/apiSlice";

import modalStyles from "../modal.module.css";
import deleteModalStyles from "./deleteModal.module.css";

type DeleteModalPropsType = {
  handleCloseButton: () => void;
  movieId: number;
};

function DeleteModal({ handleCloseButton, movieId }: DeleteModalPropsType) {
  const [deleteMovie] = useDeleteMovieMutation();

  return (
    <div className={deleteModalStyles.delete_modal}>
      <div className={modalStyles.modal_header}>
        <p className={modalStyles.modal_title}>Delete movie</p>
        <ModalCloseButton handleButton={handleCloseButton} />
      </div>
      <p className={deleteModalStyles.delete_text}>
        Are you sure you want delete this movie?
      </p>
      <div className={modalStyles.modal_footer}>
        <Button btnType={"btn_danger"} onClick={() => deleteMovie(movieId)}>
          Confirm
        </Button>
      </div>
    </div>
  );
}

export default DeleteModal;
