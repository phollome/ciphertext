import React from "react";
import ReactDOM from "react-dom/client";
import Playground from "./Playground.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = document.getElementById("root");

if (root === null) {
  throw new Error("Root element not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Playground />,
  },
]);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
