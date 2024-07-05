import { useState, createContext, useContext, useEffect, useRef } from "react";
import { DropdownListProps, DropdownProps } from "../Props/Dropdown";
import Button from "./Button";
import { ButtonProps } from "../Props/Button";
type DropdownContextType = {
  isOpened: boolean;
  setIsOpen: (value: boolean) => void;
};

const DropdownContext = createContext<DropdownContextType>({
  isOpened: false,
  setIsOpen: () => {},
});
export const Dropdown = ({ ...props }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(props.isOpen || false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", (e) => {
        if (
          dropDownRef.current &&
          !dropDownRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      });
    }
  }, [isOpen]);
  return (
    <DropdownContext.Provider
      value={{ isOpened: isOpen, setIsOpen: setIsOpen }}
    >
      <div ref={dropDownRef} className="relative">
        {props.children}
      </div>
    </DropdownContext.Provider>
  );
};

export const DropdownList = ({ ...props }: DropdownListProps) => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownList must be used inside Dropdown");
  const { isOpened, setIsOpen } = context;

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

  let paddingClasses = "p-2";
  const containerClasses = `left-0 dark:bg-dark-background bg-light-background absolute  w-max top-full mt-2 z-50 border-light-default dark:!border-dark-default border-2 flex flex-col gap-2  dark:text-dark-foreground text-light-foreground ${roundedClasses} ${props.color ? "" : ""} ${props.className} ${paddingClasses}`;
  return isOpened ? (
    <div className={`${containerClasses}`}>{props.children}</div>
  ) : null;
};

export const DropDownTrigger = ({ ...props }: ButtonProps) => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropDownTrigger must be used inside Dropdown");
  const { isOpened, setIsOpen } = context;

  return (
    <Button
      color={props.color ? props.color : "default"}
      variant={props.variant ? props.variant : "filled"}
      onClick={() => setIsOpen(!isOpened)}
      className={props.className ? props.className : ""}
    >
      {props.children}
    </Button>
  );
};
