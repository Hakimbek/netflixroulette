import React from "react";
import Genre from "./Genre/Genre";
import Date from "./Date/Date";
import "./sort.css";

function Sort() {
  return (
    <div className="sort">
      <Genre />
      <Date />
    </div>
  );
}

export default Sort;
