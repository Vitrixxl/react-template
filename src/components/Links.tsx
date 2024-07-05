import { NavLink } from "react-router-dom";
import { LinkProps } from "../Props/Link";
export const Link = ({ ...props }: LinkProps) => {
  const { href, children, color } = props;
  let activeClasses = " font-semibold ";
  let hoverClasses: string;
  switch (color) {
    case "primary":
      activeClasses += "text-primary";
      hoverClasses = "hover:text-primary";
      break;
    case "secondary":
      hoverClasses = "hover:text-secondary";
      activeClasses += "text-secondary";
      break;
    case "success":
      hoverClasses = "hover:text-success";
      activeClasses += "text-success";
      break;
    case "danger":
      hoverClasses = "hover:text-danger";
      activeClasses += "text-danger";
      break;
    case "warning":
      hoverClasses = "hover:text-warning";
      activeClasses += "text-warning";
      break;
    default:
      hoverClasses = "hover:text-primary";
      activeClasses += "text-primary";
  }

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? ` transition-all duration-150 ${activeClasses}`
          : ` transition-all duration-150 font-semibold ${hoverClasses}`
      }
      onClick={props.onClick}
    >
      {children}
    </NavLink>
  );
};
