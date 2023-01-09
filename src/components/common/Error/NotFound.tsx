import Header from "../../Header/Header";
import Error from "./Error";

import styles from "./error.module.css";

function NotFound() {
  return (
    <div>
      <Header />
      <div className={styles.error_wrapper}>
        <Error>Something went wrong</Error>
        <Error>404</Error>
      </div>
    </div>
  );
}

export default NotFound;
