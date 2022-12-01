import React from "react";
import Logo from "./Logo";
import AddMovieButton from "./AddMovieButton";
import WrapperLayout from "../WrapperLayout";

function Title() {
  return (
    <WrapperLayout>
      <Logo>
        <b>netflix</b>roulette
      </Logo>
      <AddMovieButton>+ ADD MOVIE</AddMovieButton>
    </WrapperLayout>
  );
}

export default Title;
