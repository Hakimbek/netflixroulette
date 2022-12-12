import styles from "../modal.module.css";
import ModalHeader from "../../common/Modal/ModalHeader/ModalHeader";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { DeleteMovieModalPropsType } from "../../../types/modal/deleteMovieModal.types";
import {
  handleDeleteMovieModalToggle,
  selectDeleteMovieModalToggle,
} from "../../../redux/slice/deleteMovieModalSlice";
import { deleteMovie } from "../../../redux/api/movieApiCalls";

function DeleteMovieModal({
  handleMovieSettingToggle,
  movieId,
}: DeleteMovieModalPropsType) {
  const dispatch = useAppDispatch();
  const deleteModalToggle = useAppSelector(selectDeleteMovieModalToggle);

  const handleHeaderCloseButton = () => {
    dispatch(handleDeleteMovieModalToggle());
    handleMovieSettingToggle();
  };

  const handleDeleteMovieButton = (movieId: number) => {
    void dispatch(deleteMovie(movieId));
    handleHeaderCloseButton();
  };

  return (
    <>
      {deleteModalToggle && (
        <>
          <div className={styles.modal_opacity}></div>
          <div className={styles.deleteModal}>
            <ModalHeader
              title={"Delete movie"}
              handleToggle={handleHeaderCloseButton}
            />
            <p>Are you sure you want delete this movie?</p>
            <button
              onClick={() => handleDeleteMovieButton(movieId)}
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

export default DeleteMovieModal;
