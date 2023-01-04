import ReactDOM from "react-dom";
import { ReactNode } from "react";

import styles from "./portal.module.css";

type PortalPropsType = {
  open: boolean;
  children: ReactNode;
};

function Portal({ open, children }: PortalPropsType) {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className={styles.modal_opacity}></div>
      {children}
    </>,
    modalRoot
  );
}

export default Portal;
