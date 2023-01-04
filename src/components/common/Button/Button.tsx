import React from "react";

import styles from "./button.module.css";

type ButtonPropsType = {
  btnType: "btn_primary" | "btn_danger" | "btn_dark";
  children: React.ReactNode;
  onClick?: () => void | unknown;
  type?: "button" | "submit";
};

function Button({ btnType, children, onClick, type }: ButtonPropsType) {
  let btn;

  if (btnType === "btn_primary") {
    btn = styles.btn_primary;
  } else if (btnType === "btn_danger") {
    btn = styles.btn_danger;
  } else {
    btn = styles.btn_dark;
  }

  return (
    <button type={type} onClick={onClick} className={`${styles.btn} ${btn}`}>
      {children}
    </button>
  );
}

export default Button;
