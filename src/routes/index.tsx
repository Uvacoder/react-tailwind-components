import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "@/pages/Home";
import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
