import React from "react";
import WrapperLayout from "../../Header/WrapperLayout";
import Date from "./SortBy";
import Button from "./Button";

function Sort() {
  return (
    <WrapperLayout>
      <Button>ALL</Button>
      <Button>DOCUMENTARY</Button>
      <Button>COMEDY</Button>
      <Button>HORROR</Button>
      <Button>CRIME</Button>
      <Date />
    </WrapperLayout>
  );
}

export default Sort;
