import { useState } from "react";

import Button from "../common/Button/Button";
import Logo from "../common/Logo/Logo";
import Modal from "../Modal/Modal";
import Search from "./Search/Search";
import Portal from "../common/Modal/Portal/Portal";

import styles from "./header.module.css";

function Header() {
  const [addModalToggle, setAddModalToggle] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_wrapper}>
          <Logo />
          <Button
            onClick={() => setAddModalToggle(true)}
            btnType={"btn_primary"}
          >
            + Add movie
          </Button>
        </div>
        <Search />
      </div>
      <Portal open={addModalToggle}>
        <Modal
          title={"Add movie"}
          handleCloseButton={() => setAddModalToggle(false)}
          movie={null}
        />
      </Portal>
    </>
  );
}

export default Header;
