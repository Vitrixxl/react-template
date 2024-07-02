import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { NestedPage } from "./Pages/Nested";
import Navbar from "./components/Nav/Navbar";

const Router = createBrowserRouter(
  createRoutesFromElements([
    <Route
      path="/"
      element={
        <>
          <Navbar />
          <HomePage />
        </>
      }
    >
      <Route path="/nested" element={<NestedPage />} />
    </Route>,
  ]),
);

export const RouterComp = () => {
  return <RouterProvider router={Router} />;
};
