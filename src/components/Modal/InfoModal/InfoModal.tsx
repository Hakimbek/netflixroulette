import ReactDOM from "react-dom";
import tickIcon from "../../../assets/images/tickIcon.png";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  selectInfoToggle,
  selectInfoText,
  selectInfoTitle,
} from "../../../redux/infoModalSlice";
import { handleInfoToggle } from "../../../redux/infoModalSlice";
import ModalCloseButton from "../../common/Modal/ModalCloseButtons/ModalCloseButton";

import infoModalStyles from "./infoModal.module.css";
import modalStyles from "../modal.module.css";

function InfoModal() {
  const toggle = useAppSelector(selectInfoToggle);
  const title = useAppSelector(selectInfoTitle);
  const text = useAppSelector(selectInfoText);
  const dispatch = useAppDispatch();

  if (toggle) {
    return ReactDOM.createPortal(
      <>
        <div className={modalStyles.modal_opacity}></div>
        <div className={infoModalStyles.info_modal}>
          <div className={infoModalStyles.infoModal_header}>
            <ModalCloseButton
              handleButton={() => dispatch(handleInfoToggle())}
            />
          </div>
          <div className={infoModalStyles.infoModal_body}>
            <div className={infoModalStyles.tick}>
              <img src={tickIcon} alt="Tick" />
            </div>
            <div className={infoModalStyles.info_title}>{title}</div>
            <div className={infoModalStyles.info_text}>{text}</div>
          </div>
        </div>
      </>,
      document.getElementById("modal-root") as HTMLElement
    );
  }
  return <></>;
}

export default InfoModal;
