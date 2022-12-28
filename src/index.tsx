import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundary";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "@fontsource/montserrat";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
