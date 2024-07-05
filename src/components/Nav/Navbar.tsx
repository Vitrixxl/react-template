import { NavProps } from "../../Props/NavBar";

export default function Navbar({ ...props }: NavProps) {
  let widthClasses = " flex items-center mx-auto ";

  switch (props.width) {
    case "6xl":
      widthClasses += "max-w-6xl ";
      break;

    case "7xl":
      widthClasses += "max-w-7xl ";
      break;
    case "8xl":
      widthClasses += "max-w-8xl ";
      break;
    default:
      widthClasses += "max-w-6xl ";
  }
  let backgroundClasses = "";
  switch (props.background) {
    case "transparent":
      backgroundClasses += "bg-transparent ";
      break;
    case "filled":
      backgroundClasses += "bg-Wbg dark:bg-Dbg";
      break;
    case "blured":
      backgroundClasses += "backdrop:blur-md backdrop-blur-md";
      break;
    default:
      backgroundClasses += "bg-Wbg dark:bg-Dbg";
  }
  return (
    <header
      className={`w-full py-4 sticky z-50 top-0 left-0 border-b-gray-500 border-opacity-50 border-b ${backgroundClasses} `}
    >
      <nav className={`${widthClasses}`}>{props.children}</nav>
    </header>
  );
}
export const NavBrand = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`h-full flex items-center w-1/4 ${className}`}>
      {children}
    </div>
  );
};
export const NavLinksList = ({
  children,
  justify,
}: {
  children?: React.ReactNode;
  justify?: "center" | "left" | "right";
}) => {
  let justifyClass = "";
  switch (justify) {
    case "center":
      justifyClass = "justify-center";
      break;
    case "left":
      justifyClass = "justify-start";
      break;
    case "right":
      justifyClass = "justify-end";
      break;
    default:
      justifyClass = "justify-start";
  }
  return (
    <div className={`w-2/4 flex items-center`}>
      <ul className={`flex w-full items-center gap-2 lg:gap-4 ${justifyClass}`}>
        {children}
      </ul>
    </div>
  );
};
export const NavAction = ({ children }: { children?: React.ReactNode }) => {
  return <div className="w-1/4 flex justify-end">{children}</div>;
};
