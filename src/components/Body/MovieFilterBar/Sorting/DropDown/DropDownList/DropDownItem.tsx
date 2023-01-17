import { useSearchParams } from "react-router-dom";

import styles from "../dropDown.module.css";

type DropDownItemPropsType = {
  children: string;
  handleToggle: () => void;
};

function DropDownItem({ children, handleToggle }: DropDownItemPropsType) {
  const [, setSearchParams] = useSearchParams();

  const clickSortOption = (sortBy: string) => {
    setSearchParams((prev) => {
      prev.set("sortBy", sortBy);
      return prev;
    });
    handleToggle();
  };

  return (
    <div
      className={styles.dropDown_item}
      onClick={() => clickSortOption(children)}
    >
      {children}
    </div>
  );
}

export default DropDownItem;
