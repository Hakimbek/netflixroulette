import styles from "./modalFooter.module.css";
import { ModalFooterTypes } from "../../../../types/modal/modalFooter.types";
import { useAppDispatch } from "../../../../redux/hooks";
import { handleAddMovieModalToggle } from "../../../../redux/slice/addMovieModalSlice";

function ModalFooter({ props, requestMethod }: ModalFooterTypes) {
  const dispatch = useAppDispatch();

  const https = /(https?:\/\/.*\.(?:png|jpg))/i;
  const date = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

  const check =
    Boolean(props.title) &&
    props.url.match(https) &&
    props.release.match(date) &&
    Boolean(props.rating) &&
    Boolean(props.overview) &&
    Boolean(props.runtime) &&
    Boolean(props.genre.length);

  const handleResetButton = () => {
    props.setTitle("");
    props.setUrl("");
    props.setGenre([]);
    props.setOverview("");
    props.setRating("");
    props.setRelease("");
    props.setRuntime("");
  };

  const handleSubmitButton = () => {
    const result = requestMethod();
    if (result === "pots") {
      dispatch(handleAddMovieModalToggle());
    }
  };

  return (
    <div className={styles.modalFooter}>
      <button
        className={`${styles.modalFooter_button} ${styles.modalFooter_resetButton}`}
        onClick={handleResetButton}
      >
        Reset
      </button>
      <button
        className={`${styles.modalFooter_button} ${styles.modalFooter_submitButton}`}
        disabled={!check}
        onClick={handleSubmitButton}
      >
        Submit
      </button>
    </div>
  );
}

export default ModalFooter;
