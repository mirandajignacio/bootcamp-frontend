import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import { Home } from "./routes/home";
import { Produce } from "./routes/produce";
import { Basket } from "./routes/basket";
import { ContextExample } from "./routes/context-example";
import { HooksExample } from "./routes/hooks-example";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/produce",
        element: <Produce />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/context-example",
        element: <ContextExample />,
      },
      {
        path: "/hooks-example",
        element: <HooksExample />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
