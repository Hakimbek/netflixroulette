import WrapperSpaceBetween from "../../common/WrapperSpaceBetween/WrapperSpaceBetween";
import styles from "./modalHeader.module.css";
import closeIcon from "../../../assets/images/closeIcon.png";
import { ModalHeaderProps } from "../../../types/modal.types";

function ModalHeader({ title, handleToggle }: ModalHeaderProps) {
  const handleCloseButton = () => {
    handleToggle();
  };

  return (
    <WrapperSpaceBetween>
      <p className={styles.modalHeader_title}>{title}</p>
      <button
        onClick={handleCloseButton}
        className={styles.modalHeader_closeButton}
      >
        <img src={closeIcon} alt="close" />
      </button>
    </WrapperSpaceBetween>
  );
}

export default ModalHeader;
