import React from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import WrapperLayout from "../../WrapperLayout";

function Form() {
  return (
    <WrapperLayout>
      <SearchInput />
      <SearchButton>SEARCH</SearchButton>
    </WrapperLayout>
  );
}

export default Form;
