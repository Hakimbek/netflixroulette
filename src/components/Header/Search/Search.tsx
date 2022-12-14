import Button from "../../common/Button/Button";

import styles from "./search.module.css";

function Search() {
  return (
    <div className={styles.search_wrapper}>
      <p className={styles.search_title}>Find your movie</p>
      <form action={"#"} className={styles.search_form}>
        <input
          className={styles.search_input}
          placeholder={"What do you want to watch?"}
          type={"text"}
        />
        <Button btnType={"btn_danger"}>Search</Button>
      </form>
    </div>
  );
}

export default Search;
