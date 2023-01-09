import Button from "../../common/Button/Button";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import {
  selectFilterBy,
  selectSearchQuery,
  selectSortBy,
  setSearchQuery,
} from "../../../redux/movieSlice";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./search.module.css";

function Search() {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectSearchQuery);
  const sortBy = useAppSelector(selectSortBy);
  const { search } = useParams();
  const options = useAppSelector(selectFilterBy);
  const [searchState, setSearchState] = useState(searchQuery);
  let to = `/search`;

  useEffect(() => {
    dispatch(setSearchQuery(search || ""));
    setSearchState(search || "");
  }, [dispatch, search, searchQuery]);

  if (searchState) {
    to += `/${searchState}`;
  }

  if (options.length !== 0) {
    to += `/genre/${options.join("&")}`;
  }

  if (sortBy !== "nothing") {
    to += `/sortBy/${sortBy}`;
  }

  return (
    <div className={styles.search_wrapper}>
      <p className={styles.search_title}>Find your movie</p>
      <form action={"#"} className={styles.search_form}>
        <input
          name={"title"}
          className={styles.search_input}
          placeholder={"What do you want to watch?"}
          type={"text"}
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
        />
        <Link to={to}>
          <Button
            type={"submit"}
            btnType={"btn_danger"}
            onClick={() => dispatch(setSearchQuery(searchState))}
          >
            Search
          </Button>
        </Link>
      </form>
    </div>
  );
}

export default Search;
