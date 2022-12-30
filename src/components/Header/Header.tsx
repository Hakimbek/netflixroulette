import { useState } from "react";

import Button from "../common/Button/Button";
import Logo from "../common/Logo/Logo";
import Modal from "../Modal/Modal";
import Search from "./Search/Search";

import styles from "./header.module.css";

function Header() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_wrapper}>
        <Logo />
        <Button onClick={handleToggle} btnType={"btn_primary"}>
          + Add movie
        </Button>
      </div>
      <Search />
      <Modal
        title={"Add movie"}
        toggle={toggle}
        handleCloseButton={handleToggle}
      />
    </div>
  );
}

export default Header;
