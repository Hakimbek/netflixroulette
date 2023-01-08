import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundary";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createHashRouter, redirect, RouterProvider } from "react-router-dom";
import NotFound from "./components/common/Error/NotFound";

import "@fontsource/montserrat";

import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    loader: () => redirect("/search"),
  },
  {
    path: "search",
    element: <App />,
    children: [
      {
        path: ":search",
        element: <App />,
        children: [
          {
            path: "genre/:genre",
            element: <App />,
            children: [
              {
                path: "sortBy/:sortBy",
                element: <App />,
                children: [
                  {
                    path: "movie/:id",
                    element: <App />,
                  },
                ],
              },
              {
                path: "movie/:id",
                element: <App />,
              },
            ],
          },
          {
            path: "sortBy/:sortBy",
            element: <App />,
            children: [
              {
                path: "genre/:genre",
                element: <App />,
              },
              {
                path: "movie/:id",
                element: <App />,
              },
            ],
          },
          {
            path: "movie/:id",
            element: <App />,
          },
        ],
      },
      {
        path: "genre/:genre",
        element: <App />,
        children: [
          {
            path: "sortBy/:sortBy",
            element: <App />,
            children: [
              {
                path: "movie/:id",
                element: <App />,
              },
            ],
          },
          {
            path: "movie/:id",
            element: <App />,
          },
        ],
      },
      {
        path: "sortBy/:sortBy",
        element: <App />,
        children: [
          {
            path: "genre/:genre",
            element: <App />,
          },
          {
            path: "movie/:id",
            element: <App />,
          },
        ],
      },
      {
        path: "movie/:id",
        element: <App />,
      },
    ],
  },
]);

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
