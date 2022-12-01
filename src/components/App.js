import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Logo from "./Header/Title/Logo";
import "./app.css";
import Body from "./Body/Body";

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer>
        <Logo>
          <b>netflix</b>roulette
        </Logo>
      </Footer>
    </>
  );
}

export default App;
