import styled from "styled-components";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>404: Not Found</h1>,
  },
]);

export function Pages() {
  return <RouterProvider router={router} />;
}
