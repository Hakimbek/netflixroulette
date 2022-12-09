import styles from "./wrapperSpaceBetween.module.css";
import WrapperProps from "../../../types/wrapperSpaceBetween.types";

function WrapperSpaceBetween({ children }: WrapperProps) {
  return <div className={styles.wrapperSpaceBetween}>{children}</div>;
}

export default WrapperSpaceBetween;
