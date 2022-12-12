import SearchWrapper from "./Search/SearchWrapper";
import Logo from "../common/Logo/Logo";
import AddMovieButton from "./AddMovieButton/AddMovieButton";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_logoAddMovieButton_wrapper}>
        <Logo />
        <AddMovieButton />
      </div>
      <SearchWrapper />
    </div>
  );
}

export default Header;
