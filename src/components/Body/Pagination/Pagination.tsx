import Button from "../../common/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  prev,
  next,
  selectPage,
  setPage,
} from "../../../redux/paginationSlice";

import styles from "./pagination.module.css";

type PaginationPropsType = {
  total: number;
};

function Pagination({ total }: PaginationPropsType) {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);
  const minPage = 1;
  const maxPage = Math.ceil(total / 21);

  const handlePrev = () => {
    if (page !== minPage && total !== 0) {
      dispatch(setPage(page - 1));
      dispatch(prev());
    }
  };

  const handleNext = () => {
    if (page !== maxPage && total !== 0) {
      dispatch(setPage(page + 1));
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
