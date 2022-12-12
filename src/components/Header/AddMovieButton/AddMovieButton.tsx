import styles from "./addMovieButton.module.css";
import AddMovieModal from "../../Modal/AddMovieModal/AddMovieModal";
import { useAppDispatch } from "../../../redux/hooks";
import { handleAddMovieModalToggle } from "../../../redux/slice/addMovieModalSlice";

function AddMovieButton() {
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        className={styles.addMovieButton}
        onClick={() => dispatch(handleAddMovieModalToggle())}
      >
        + ADD MOVIE
      </button>
      <AddMovieModal />
    </>
  );
}

export default AddMovieButton;
