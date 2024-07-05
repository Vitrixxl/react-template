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
import { Dropdown, DropdownList, DropDownTrigger } from "./components/Dropdown";
const Nav = () => {
  return (
    <>
      <Navbar background="blured">
        <NavBrand>
          <L to={"/"} className="dark:text-white font-bold text-2xl">
            VSX-ALR
          </L>
        </NavBrand>
        <NavLinksList justify="center">
          <Link href="buttons">Buttons</Link>
          <Link href="modals">Modals</Link>
          <Link href="inputs">Inputs</Link>
          <Link href="slider">Sliders</Link>
          <Dropdown>
            <DropDownTrigger variant="empty" className="!px-0 font-semibold">
              DropDown
            </DropDownTrigger>
            <DropdownList>
              <Button variant="default" size="sm" className="w-full text-start">
                Check the dropdowns
              </Button>
              <Button variant="default" size="sm" className="w-full text-start">
                Same link
              </Button>
              <Button variant="default" size="sm" className="w-full text-start">
                Still the same
              </Button>
              <Button variant="default" size="sm" className="w-full text-start">
                Told u it was the same
              </Button>

              <L to={"/dropdown"}>
                <Button
                  variant="ghost"
                  color="warning"
                  size="sm"
                  className="w-full text-start"
                >
                  Bro i swear it's the same
                </Button>
              </L>

              <Button
                variant="ghost"
                color="danger"
                size="sm"
                className="w-full text-start"
              >
                Will you stop one day ?
              </Button>
              <Button
                variant="filled"
                color="danger"
                size="sm"
                className="w-full text-start"
              >
                I said STOP !
              </Button>
            </DropdownList>
          </Dropdown>
          <Link href="checkbox">Checkboxes</Link>
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
import InputPage from "./Pages/InputPage";
import ModalPage from "./Pages/ModalsPage";
import DropdownPage from "./Pages/DropdownPage";
import CheckPage from "./Pages/CheckPage";
import SliderPage from "./Pages/SliderPage";
const RouterBrowser = createBrowserRouter(
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
      <Route path="/inputs" element={<InputPage />} />,
      <Route path="/modals" element={<ModalPage />} />,
      <Route path="/dropdown" element={<DropdownPage />} />
      <Route path="/checkbox" element={<CheckPage />} />
      <Route path="/slider" element={<SliderPage />} />
    </Route>,
    <Route path="/nested" element={<NestedPage />} />,
  ]),
);

export const Router = () => {
  return <RouterProvider router={RouterBrowser} />;
};
