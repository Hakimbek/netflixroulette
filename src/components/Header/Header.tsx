import SearchWrapper from "./Search/SearchWrapper";
import WrapperSpaceBetween from "../common/WrapperSpaceBetween/WrapperSpaceBetween";
import Logo from "../common/Logo/Logo";
import AddMovieButton from "./AddMovieButton/AddMovieButton";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <WrapperSpaceBetween>
        <Logo />
        <AddMovieButton />
      </WrapperSpaceBetween>
      <SearchWrapper />
    </div>
  );
}

export default Header;
