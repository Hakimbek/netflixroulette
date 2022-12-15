import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundary";
import { MoviesProvider } from "./stateManagement/store";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <MoviesProvider>
        <App />
      </MoviesProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
