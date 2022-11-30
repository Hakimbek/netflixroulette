import React from "react";
import Logo from "./Logo/Logo";
import AddMovie from "./AddMovie/AddMovie";
import "./title.css";

function Title() {
  return (
    <div className="title">
      <Logo>
        <b>netflix</b>reulette
      </Logo>
      <AddMovie>+ ADD MOVIE</AddMovie>
    </div>
  );
}

export default Title;
