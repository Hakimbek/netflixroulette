import styles from "./modalButtons.module.css";
import closeIcon from "../../../../assets/images/closeIcon.png";
import { HandleButtonType } from "../../../../types/modal/handleButton.type";

function ModalCloseButton({ handleButton }: HandleButtonType) {
  return (
    <button onClick={() => handleButton()} className={styles.modal_closeButton}>
      <img src={closeIcon} alt="close" />
    </button>
  );
}

export default ModalCloseButton;
