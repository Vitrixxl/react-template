import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {
  BrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { RouterComp } from "./Router.tsx";
import { HomePage } from "./Pages/HomePage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterComp />
  </React.StrictMode>
);
