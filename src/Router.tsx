import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import { HomePage } from "./Pages/HomePage";

import { Link as L } from "react-router-dom";

const RouterBrowser = createBrowserRouter(
  createRoutesFromElements([
    <Route>
      <Route
        path="/"
        element={
          <>
            <HomePage />
          </>
        }
      />
    </Route>,
  ]),
);

export const Router = () => {
  return <RouterProvider router={RouterBrowser} />;
};
