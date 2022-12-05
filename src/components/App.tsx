import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <Body />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
