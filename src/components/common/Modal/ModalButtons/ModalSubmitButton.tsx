import styles from "./modalButtons.module.css";
import { HandleButtonType } from "../../../../types/modal/handleButton.type";

function ModalSubmitButton({ handleButton }: HandleButtonType) {
  return (
    <button className={styles.modal_submitButton} onClick={handleButton}>
      Submit
    </button>
  );
}

export default ModalSubmitButton;
