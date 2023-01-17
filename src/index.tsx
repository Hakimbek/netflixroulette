import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundary";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/common/Error/NotFound";

import "@fontsource/montserrat";

import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
    },
  ],
  { basename: "/search" }
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
