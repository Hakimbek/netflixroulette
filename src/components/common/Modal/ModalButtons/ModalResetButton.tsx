import styles from "./modalButtons.module.css";
import { HandleButtonType } from "../../../../types/modal/handleButton.type";

function ModalResetButton({ handleButton }: HandleButtonType) {
  return (
    <button className={styles.modal_resetButton} onClick={handleButton}>
      Reset
    </button>
  );
}

export default ModalResetButton;
