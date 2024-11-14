import React from "react";
import ReactDOM from "react-dom/client";
import Playground from "./Playground.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Solution from "./Solution.tsx";

const root = document.getElementById("root");

if (root === null) {
  throw new Error("Root element not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Playground />,
  },
  {
    path: "/solution",
    element: <Solution />,
  },
]);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
