import ModalHeader from "../../common/Modal/ModalHeader/ModalHeader";
import AddMovieModalBody from "./AddMovieModalBody";
import styles from "../modal.module.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  handleAddMovieModalToggle,
  selectAddMovieModalToggle,
} from "../../../redux/slice/addMovieModalSlice";

function AddMovieModal() {
  const dispatch = useAppDispatch();
  const addMovieModalToggle = useAppSelector(selectAddMovieModalToggle);

  return (
    <>
      {addMovieModalToggle && (
        <>
          <div className={styles.modal_opacity}></div>
          <div className={styles.modal_wrapper}>
            <ModalHeader
              title={"Add movie"}
              handleToggle={() => dispatch(handleAddMovieModalToggle())}
            />
            <AddMovieModalBody />
          </div>
        </>
      )}
    </>
  );
}

export default AddMovieModal;
