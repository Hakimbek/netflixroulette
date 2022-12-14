import closeIcon from "../../../../assets/images/closeIcon.png";

import styles from "./modalCloseButtons.module.css";

type CloseButtonPropsType = {
  handleButton: () => void;
};

function ModalCloseButton({ handleButton }: CloseButtonPropsType) {
  return (
    <button onClick={() => handleButton()} className={styles.modal_closeButton}>
      <img src={closeIcon} alt="close" />
    </button>
  );
}

export default ModalCloseButton;
