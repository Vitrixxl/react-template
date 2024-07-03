import { useState, createContext, useContext } from "react";
import { DropdownListProps, DropdownProps } from "../Props/Dropdown";
import Button from "./Button";
const DropdownContext = createContext<{ isOpened: boolean }>({
  isOpened: false,
});
export const Dropdown = ({ ...props }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(props.isOpen || false);

  return (
    <DropdownContext.Provider value={{ isOpened: isOpen }}>
      <div className="relative">
        <Button
          color={props.color ? props.color : "primary"}
          variant={props.variant ? props.variant : "filled"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {props.children}
        </Button>
      </div>
    </DropdownContext.Provider>
  );
};

export const DropdownList = ({ ...props }: DropdownListProps) => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownList must be used inside Dropdown");
  const { isOpened } = context;
  let roundedClasses = "rounded-lg";
  switch (props.radius) {
    case "none":
      roundedClasses = "rounded-none";
      break;

    case "sm":
      roundedClasses = "rounded-sm";
      break;

    case "md":
      roundedClasses = "rounded-md";
      break;

    case "lg":
      roundedClasses = "rounded-lg";
      break;

    case "xl":
      roundedClasses = "rounded-xl";
      break;
  }
  switch (props.color) {
  }
  const containerClasses = `flex flex-col gap-1 dark:text-dark-foreground text-light-foreground ${roundedClasses} ${props.color ? "" : ""} ${props.className} `;
  return isOpened ? <div className="flex flex-col gap-1 "></div> : null;
};
