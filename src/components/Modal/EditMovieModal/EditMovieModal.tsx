import ModalHeader from "../../common/Modal/ModalHeader/ModalHeader";
import EditMovieModalBody from "./EditMovieModalBody";
import styles from "../modal.module.css";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { EditMovieModalPropsType } from "../../../types/modal/editModavieModal.types";
import {
  handleEditMovieModalToggle,
  selectEditMovieModalToggle,
} from "../../../redux/slice/editMovieModalSlice";

function EditMovieModal({
  movieId,
  handleMovieSettingToggle,
}: EditMovieModalPropsType) {
  const dispatch = useAppDispatch();
  const editModalToggle = useAppSelector(selectEditMovieModalToggle);

  const handleHeaderCloseButton = () => {
    dispatch(handleEditMovieModalToggle());
    handleMovieSettingToggle();
  };

  return (
    <>
      {editModalToggle && (
        <>
          <div className={styles.modal_opacity}></div>
          <div className={styles.modal_wrapper}>
            <ModalHeader
              title={"Edit movie"}
              handleToggle={handleHeaderCloseButton}
            />
            <EditMovieModalBody movieId={movieId} />
          </div>
        </>
      )}
    </>
  );
}

export default EditMovieModal;
