import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { NestedPage } from "./Pages/Nested";

const Router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<HomePage />}>
      <Route path="/nested" element={<NestedPage />} />
    </Route>,
  ])
);

export const RouterComp = () => {
  return <RouterProvider router={Router} />;
};
