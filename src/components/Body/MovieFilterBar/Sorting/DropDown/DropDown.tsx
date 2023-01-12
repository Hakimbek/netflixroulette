import { useEffect, useState } from "react";
import DropDownHeader from "./DropDownHeader/DropDownHeader";
import DropDownList from "./DropDownList/DropDownList";
import { useSearchParams } from "react-router-dom";

import styles from "./dropDown.module.css";

function DropDown() {
  const [sortToggle, setSortToggle] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "release_date";

  useEffect(() => {
    setSearchParams((prev) => {
      prev.set("sortBy", sortBy);
      return prev;
    });
  }, []);

  const handleSortToggle = () => {
    setSortToggle(!sortToggle);
  };

  return (
    <div className={styles.dropDown_wrapper}>
      <DropDownHeader
        toggle={sortToggle}
        handleToggle={handleSortToggle}
        selectedOption={sortBy}
      />
      <DropDownList toggle={sortToggle} handleToggle={handleSortToggle} />
    </div>
  );
}

export default DropDown;
