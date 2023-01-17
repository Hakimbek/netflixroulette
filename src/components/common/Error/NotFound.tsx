import Error from "./Error";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

import styles from "./error.module.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.error_wrapper}>
        <Error>Something went wrong</Error>
        <Error>404</Error>
        <Button onClick={() => navigate("/search")} btnType={"btn_danger"}>
          Search
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
