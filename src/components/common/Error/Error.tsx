import styles from "./error.module.css";

type ErrorPropsType = {
  children: string;
};

function Error({ children }: ErrorPropsType) {
  return <div className={styles.error}>{children}</div>;
}

export default Error;
