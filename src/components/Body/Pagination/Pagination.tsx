import { useState } from "react";
import Button from "../../common/Button/Button";
import { useAppDispatch } from "../../../redux/hooks";
import { prev, next } from "../../../redux/paginationSlice";

import styles from "./pagination.module.css";

type PaginationPropsType = {
  total: number;
};

function Pagination({ total }: PaginationPropsType) {
  const dispatch = useAppDispatch();
  const minPage = 1;
  const maxPage = Math.ceil(total / 21);

  const [page, setPage] = useState(1);

  const handlePrev = () => {
    if (page !== minPage) {
      setPage((prev) => prev - 1);
      dispatch(prev());
    }
  };

  const handleNext = () => {
    if (page !== maxPage) {
      setPage((prev) => prev + 1);
      dispatch(next());
    }
  };

  return (
    <div className={styles.pagination_wrapper}>
      <Button btnType={"btn_danger"} onClick={handlePrev}>
        Prev
      </Button>
      <h4 className={styles.page}>{page}</h4>
      <Button btnType={"btn_danger"} onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}

export default Pagination;
