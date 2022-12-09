import WrapperSpaceBetween from "../../common/WrapperSpaceBetween/WrapperSpaceBetween";
import SearchTitle from "./SearchTitle/SearchTitle";
import SearchButton from "./SearchButton/SearchButton";
import SearchInput from "./SearchInput/SearchInput";
import styles from "./search.module.css";

function SearchWrapper() {
  return (
    <div className={styles.searchWrapper}>
      <SearchTitle />
      <WrapperSpaceBetween>
        <SearchInput />
        <SearchButton />
      </WrapperSpaceBetween>
    </div>
  );
}

export default SearchWrapper;
