import React from "react";
import Logo from "./Header/Title/Logo";
import "./app.css";

const Header = React.lazy(() => import("./Header/Header"));
const Body = React.lazy(() => import("./Body/Body"));
const Footer = React.lazy(() => import("./Footer/Footer"));
const ErrorBoundary = React.lazy(() => import("./ErrorBoundary"));

function App() {
  return (
    <React.Suspense fallback={<h3>Loading...</h3>}>
      <Header />
      <ErrorBoundary>
        <Body />
      </ErrorBoundary>
      <Footer>
        <Logo>
          <b>netflix</b>roulette
        </Logo>
      </Footer>
    </React.Suspense>
  );
}

export default App;
