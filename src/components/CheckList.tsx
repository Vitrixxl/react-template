import {
  CheckListProps,
  CheckListContextType,
  CheckBoxProps,
  CheckIconsProps,
} from "../Props/CheckList";
import { useState, useEffect, useContext, createContext } from "react";
import { FaCheck } from "react-icons/fa6";
const CheckListContext = createContext<CheckListContextType | null>(null);
export default function CheckList({ ...props }: CheckListProps) {
  const [sKeys, setSKeys] = useState<(string | number | null)[]>(
    props.sKeys || [],
  );

  useEffect(() => {
    if (props.onChange) {
      props.onChange(sKeys);
    }
  }, [sKeys]);
  let direction = "flex-col";
  if (props.direction === "row") {
    direction = "flex-row";
  }
  let radio = props.radio || false;
  return (
    <CheckListContext.Provider value={{ sKeys, setSKeys, radio }}>
      <div className={`flex ${direction} gap-4`}>{props.children}</div>
    </CheckListContext.Provider>
  );
}

export function CheckBox({ ...props }: CheckBoxProps) {
  const context = useContext(CheckListContext);
  if (!context) return;
  const { sKeys, setSKeys } = context;

  let iSize: "sm" | "md" | "lg" = "md";
  let fSize: "text-sm" | "text-base" | "text-lg" = "text-base";
  switch (props.size) {
    case "sm":
      iSize = "sm";
      fSize = "text-sm";
      break;
    case "md":
      iSize = "md";

      break;
    case "lg":
      iSize = "lg";
      fSize = "text-lg";
      break;
  }
  const handleCheck = () => {
    if (sKeys.includes(props.id)) {
      setSKeys(sKeys.filter((key) => key !== props.id));
    } else {
      if (context.radio) {
        setSKeys([props.id]);
      } else {
        setSKeys([...sKeys, props.id]);
      }
    }
  };
  return (
    <button
      onClick={() => handleCheck()}
      className={`flex gap-2 ${fSize} items-center`}
    >
      <CheckIcon
        size={iSize}
        color={props.color}
        isActive={sKeys.includes(props.id)}
      />
      {props.children}
    </button>
  );
}

const CheckIcon = ({ ...props }: CheckIconsProps) => {
  let color = "text-light-foreground dark:text-dark-foreground bg-primary";
  switch (props.color) {
    case "secondary":
      color = "text-light-foreground dark:text-dark-foreground bg-secondary";
      break;
    case "success":
      color = "text-light-foreground dark:text-dark-foreground bg-success";
      break;
    case "warning":
      color = "text-light-foreground dark:text-dark-foreground bg-warning";
      break;
    case "danger":
      color = "text-light-foreground dark:text-dark-foreground bg-danger ";
      break;
  }
  let size: "size-5" | "size-6" | "size-8" = "size-6";
  switch (props.size) {
    case "sm":
      size = "size-5";
      break;

    case "lg":
      size = "size-8";
      break;
  }
  let activeClass = ` border-none ${color}`;
  return (
    <div
      className={`${props.isActive ? activeClass : ""} ${size}  p-1 border-2  border-light-default dark:border-dark-default rounded-md`}
    >
      {props.isActive && <FaCheck className="size-full" />}
    </div>
  );
};
