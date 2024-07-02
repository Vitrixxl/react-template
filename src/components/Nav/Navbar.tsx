import { NavProps } from "../../Props/NavBar";
import { Link } from "react-router-dom";
import Button from "../Button";

export default function Navbar({ ...props }: NavProps) {
  let width = "max-w-6xl";
  let justify = "justify-start";
  switch (props.width) {
    case "6xl":
      width = "max-w-6xl";
      break;

    case "7xl":
      width = "max-w-7xl";
      break;
    case "8xl":
      width = "max-w-8xl";
      break;
  }
  switch (props.justify) {
    case "center":
      justify = "justify-center;";
      break;
    case "left":
      justify = "justify-start";
      break;
    case "right":
      justify = "justify-center";
  }
  const dispatchClasses = `${width} ${justify} w-full flex items-center mx-auto `;

  return (
    <header className="w-full py-4 sticky top-0 left-0 border-b-gray-500 border-opacity-50 border-b">
      <nav className={`${dispatchClasses}`}>
        <div className="w-1/4">
          <h1></h1>
        </div>
        <div className="w-2/4">
          <ul className="flex items-center gap-4">
            <li>Link1</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="w-1/4 flex items-center justify-end">
          <Button>S'inscrire</Button>
        </div>
      </nav>
    </header>
  );
}

const navLogo = () => {
  return <div>hey</div>;
};
