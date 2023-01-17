import Button from "../../common/Button/Button";
import { useSearchParams, Form } from "react-router-dom";
import { FormEvent, useState } from "react";

import styles from "./search.module.css";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("searchQuery") || ""
  );

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSearchParams((prev) => {
      if (searchQuery) {
        prev.set("searchQuery", searchQuery);
      } else {
        prev.delete("searchQuery");
      }
      return prev;
    });
  };

  return (
    <div className={styles.search_wrapper}>
      <p className={styles.search_title}>Find your movie</p>
      <Form onSubmit={submit} action={"/search"} className={styles.search_form}>
        <input
          name={"searchQuery"}
          className={styles.search_input}
          placeholder={"What do you want to watch?"}
          type={"text"}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type={"submit"} btnType={"btn_danger"}>
          Search
        </Button>
      </Form>
    </div>
  );
}

export default Search;
