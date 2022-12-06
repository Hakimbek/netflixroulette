import styles from "../search.module.css";

function SearchInput() {
  return (
    <input
      className={styles.searchInput}
      type={"text"}
      placeholder={"What do you want to watch?"}
    />
  );
}

export default SearchInput;
