import clsx from "clsx";

import classNames from "classnames";
import { useState, useRef } from "react";
import { ButtonProps } from "../Props/Button";
export default function Button({ ...props }: ButtonProps) {
  const ButtonRef = useRef<HTMLButtonElement>(null);

  const [ripples, setRipples] = useState<
    { id: number; ripple: React.ReactNode }[]
  >([]);

  let px: string = "px-4";
  let py: string = "py-1.5";
  let fontSize: string = "text-sm";
  switch (props.size) {
    case "sm":
      px = "px-2";
      py = "py-0.5";
      fontSize = "text-xs";
      break;

    case "md":
      px = "px-3.5";
      py = "py-1";
      fontSize = "text-sm";
      break;
    case "lg":
      px = "px-4";
      py = "py-1.5";
      fontSize = "text-lg";
      break;
  }
  let text: string = "text-white";
  let hoverText: string = "hover:text-white";
  switch (props.textColor) {
    case "white":
      text = "text-white";
      hoverText = "hover:text-white";
      break;
    case "black":
      text = "text-black";
      hoverText = " hover:text-black";
      break;
  }

  let color: string = "primary";
  let borderedClasses: string = "border-primary text-primary";
  let ghostClasses: string = `bg-transparent text-primary ${hoverText} hover:bg-primary `;
  let filledClasses: string = `bg-primary ${text} hover:bg-primary-600 `;
  let borderedFilledClasses: string = `bg-transparent hover:bg-primary-600  border-primary text-primary hover:border-primary-600 ${hoverText}`;

  switch (props.color) {
    case "primary":
      color = "primary";

      break;
    case "secondary":
      color = "secondary";
      filledClasses = `bg-secondary ${text} hover:bg-secondary-600 `;
      borderedClasses = "border-secondary text-secondary";
      ghostClasses = `bg-transparent text-secondary ${hoverText} hover:bg-secondary `;
      borderedFilledClasses = `bg-transparent hover:bg-secondary-600  border-secondary text-secondary hover:border-secondary-600 ${hoverText}`;
      break;
    case "success":
      color = "success";
      filledClasses = `bg-success ${text} hover:bg-success-600 `;
      borderedClasses = "border-success text-success";
      ghostClasses = `bg-transparent text-success ${hoverText} hover:bg-success `;
      borderedFilledClasses = `bg-transparent hover:bg-success-600  border-success text-success hover:border-success-600 ${hoverText}`;

      break;
    case "danger":
      color = "danger";
      filledClasses = `bg-danger ${text} hover:bg-danger-600 `;
      borderedClasses = "border-danger text-danger";
      ghostClasses = `bg-transparent text-danger ${hoverText} hover:bg-danger `;
      borderedFilledClasses = `bg-transparent hover:bg-danger-600  border-danger text-danger  hover:border-danger-600 ${hoverText}`;
      break;
    case "warning":
      color = "warning";
      filledClasses = `bg-warning ${text} hover:bg-warning-600 `;
      borderedClasses = "border-warning text-warning";
      ghostClasses = `bg-transparent text-warning ${hoverText} hover:bg-warning `;
      borderedFilledClasses = `bg-transparent hover:bg-warning-600  border-warning text-warning  hover:border-warning-600 ${hoverText}`;
      break;
  }
  let rounded = "rounded-md";
  switch (props.rounded) {
    case "none":
      rounded = "rounded-none";
      break;
    case "sm":
      rounded = "rounded-sm";
      break;
    case "md":
      rounded = "rounded-md";
      break;
    case "lg":
      rounded = "rounded-lg";
      break;
    case "full":
      rounded = "rounded-full";
      break;
  }

  let variantClasses = "";
  switch (props.variant) {
    case "bordered":
      variantClasses = `border-2 ${borderedClasses} `;
      break;
    case "ghost":
      variantClasses = `transition-all duration-150 ${ghostClasses}`;
      break;
    case "filled":
      variantClasses = ` transition-all duration-150 ${filledClasses}`;
      break;

    case "bordered-filled":
      variantClasses = `border-2 transition-all duration-150 ${borderedFilledClasses}`;

      break;
    default:
      variantClasses = ` transition-all duration-150 ${filledClasses}`;
      break;
  }

  let rippleBg = "bg-gray-100 ";
  if (props.variant && props.variant == "bordered") {
    switch (props.color) {
      case "primary":
        rippleBg = "bg-primary";
        break;
      case "secondary":
        rippleBg = "bg-secondary";
        break;
      case "success":
        rippleBg = "bg-success";
        break;
      case "danger":
        rippleBg = "bg-danger";
        break;
      case "warning":
        rippleBg = "bg-warning";
        break;
    }
  }
  const baseClasses = `relative overflow-hidden font-medium ${px} ${py} ${fontSize} ${color} ${rounded} ${variantClasses} `;
  const handleClick = (e: React.MouseEvent) => {
    if (!ButtonRef.current) return;
    const rect = ButtonRef.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const id = Date.now();
    const y = e.clientY - rect.top - size / 2;
    const x = e.clientX - rect.left - size / 2;

    const ripple = (
      <div
        key={id}
        className={`absolute z-10 ripple  ${rippleBg} bg-opacity-30`}
        style={{ left: x, top: y, width: size, height: size }}
      />
    );

    const newRipple: { id: number; ripple: React.ReactNode } = {
      id: id,
      ripple: ripple,
    };
    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((currentRipples) =>
        currentRipples.filter((ripple) => ripple.id !== newRipple.id),
      );
    }, 1000);
    if (props.onClick) {
      props.onClick(e);
    }
  };
  return (
    <button
      ref={ButtonRef}
      className={baseClasses + ""}
      onClick={(e: React.MouseEvent) => handleClick(e)}
    >
      {ripples.map((ripple) => ripple.ripple)}
      {props.children}
    </button>
  );
}
