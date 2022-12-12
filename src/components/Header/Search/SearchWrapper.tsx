import SearchTitle from "./SearchTitle/SearchTitle";
import SearchButton from "./SearchButton/SearchButton";
import SearchInput from "./SearchInput/SearchInput";
import styles from "./search.module.css";

function SearchWrapper() {
  return (
    <div className={styles.searchWrapper}>
      <SearchTitle />
      <div className={styles.search_buttonInput_wrapper}>
        <SearchInput />
        <SearchButton />
      </div>
    </div>
  );
}

export default SearchWrapper;
