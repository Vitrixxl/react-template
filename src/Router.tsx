import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { NestedPage } from "./Pages/Nested";
import Navbar, {
  NavAction,
  NavBrand,
  NavLinksList,
} from "./components/Nav/Navbar";
import { Link } from "./components/Links";
import { Link as L } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <Navbar background="blured">
        <NavBrand>
          <L to={"/"} className="dark:text-white font-bold text-2xl">
            VSX-ALR
          </L>
        </NavBrand>
        <NavLinksList>
          <Link href="buttons">Buttons</Link>
        </NavLinksList>
        <NavAction>
          <Button variant="ghost">Contacter</Button>
        </NavAction>
      </Navbar>
      <Outlet />
    </>
  );
};

import ButtonPage from "./Pages/ButtonPage";
import Button from "./components/Button";

const Router = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<Nav />}>
      <Route
        path="/"
        element={
          <>
            <HomePage />
          </>
        }
      />
      <Route path="/buttons" element={<ButtonPage />} />,
    </Route>,
    <Route path="/nested" element={<NestedPage />} />,
  ]),
);

export const RouterComp = () => {
  return <RouterProvider router={Router} />;
};
