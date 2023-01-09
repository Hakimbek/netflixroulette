import DropDown from "./DropDown/DropDown";
import {
  selectSortOrder,
  setSortBy,
  setSortOrder,
} from "../../../../redux/movieSlice";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import styles from "./sorting.module.css";

function Sorting() {
  const sortOrder = useAppSelector(selectSortOrder);
  const dispatch = useAppDispatch();
  const { sortBy } = useParams();

  useEffect(() => {
    if (sortBy) {
      dispatch(setSortBy(sortBy));
    } else {
      dispatch(setSortBy("nothing"));
    }
  }, [dispatch, sortBy]);

  const handleSortOrderButton = () => {
    if (sortOrder === "asc") {
      dispatch(setSortOrder("desc"));
    } else {
      dispatch(setSortOrder("asc"));
    }
  };

  return (
    <div className={styles.sorting}>
      <div className={styles.sorting_text}>
        Sort by
        <button className={styles.sort_order} onClick={handleSortOrderButton}>
          {sortOrder}
        </button>
        :
      </div>
      <DropDown />
    </div>
  );
}

export default Sorting;
