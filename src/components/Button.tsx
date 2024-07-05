import { useState, useRef } from "react";
import { ButtonProps } from "../Props/Button";
export default function Button({ ...props }: ButtonProps) {
  const ButtonRef = useRef<HTMLButtonElement>(null);

  const [ripples, setRipples] = useState<
    { id: number; ripple: React.ReactNode }[]
  >([]);

  let sizeClasses = "";
  let text: string = "text-white";
  let hoverText: string = "hover:text-white";
  if (!props.color) props.color = "primary";
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
  let disableClasses = `dark:!bg-opacity-50 !bg-primary-400 dark:!text-gray-300   cursor-not-allowed !text-white  !border-primary`;
  let loadingClasses = `!bg-primary  cursor-wait !text-white  !border-primary-300`;
  let borderedClasses: string = `text-primary  border-primary `;
  let ghostClasses: string = `bg-primary bg-opacity-20 text-primary ${hoverText} hover:bg-primary `;
  let filledClasses: string = `  bg-primary ${text} hover:bg-primary-600`;
  let borderedFilledClasses: string = `bg-transparent hover:bg-primary  border-primary text-primary  ${hoverText} `;
  let rippleBg = "bg-gray-100";
  let borderedLoaderClasses: string = `border-t-white border-transparent`;
  let emptyClasses: string =
    "!text-light-foreground dark:!text-dark-foreground";

  switch (props.color) {
    case "primary":
      emptyClasses = "!text-primary";
      break;
    case "secondary":
      loadingClasses = `!bg-secondary  cursor-wait !text-white  !border-secondary`;
      disableClasses = `dark:!bg-opacity-50 !bg-secondary-400 dark:!text-gray-300  !border-secondary-300 dark:!border-opacity-50 cursor-not-allowed !text-white  `;
      filledClasses = `bg-secondary ${text} hover:bg-secondary-600`;
      borderedClasses = `text-secondary border-secondary `;
      ghostClasses = `bg-secondary bg-opacity-20 text-secondary ${hoverText} hover:bg-secondary `;
      borderedFilledClasses = `bg-transparent hover:bg-secondary  border-secondary text-secondary ${hoverText}  `;

      emptyClasses = "!text-secondary";
      break;
    case "success":
      loadingClasses = `!bg-success  cursor-wait !text-white  !border-success`;
      disableClasses = `dark:!bg-opacity-50 !bg-success-400 dark:!text-gray-300  !border-success-400 dark:!border-opacity-0  cursor-not-allowed !text-white  `;
      filledClasses = `bg-success ${text} hover:bg-success-600`;
      ghostClasses = `bg-success bg-opacity-20 text-success ${hoverText} hover:bg-success `;
      borderedClasses = ` text-success border-success `;
      borderedFilledClasses = `bg-transparent   border-success hover:bg-success text-success  ${hoverText} `;

      emptyClasses = "!text-success";
      break;
    case "danger":
      loadingClasses = `!bg-danger  cursor-wait !text-white  !border-danger`;
      disableClasses = `!bg-danger-300 dark:!border-opacity-0 dark:!bg-opacity-50 !border-danger-300 cursor-not-allowed  !text-white dark:!text-gray-300`;
      filledClasses = `bg-danger ${text}   hover:bg-danger-600`;
      borderedClasses = `text-danger border-danger `;
      ghostClasses = `bg-danger bg-opacity-20 text-danger ${hoverText} hover:bg-danger `;
      borderedFilledClasses = `bg-transparent   border-danger hover:bg-danger text-danger  ${hoverText} `;

      emptyClasses = "!text-danger";
      break;
    case "warning":
      loadingClasses = `!bg-warning  cursor-wait !text-white !border-warning`;
      disableClasses = `!bg-warning-200 dark:!bg-opacity-50 !border-warning-200 dark:!border-opacity-0 cursor-not-allowed !text-white dark:!text-gray-300 `;
      filledClasses = `bg-warning ${text} hover:bg-warning-600  `;
      borderedClasses = ` text-warning border-warning `;
      ghostClasses = `bg-warning bg-opacity-20 text-warning ${hoverText} hover:bg-warning `;
      borderedFilledClasses = `bg-transparent  hover:bg-warning border-warning text-warning   ${hoverText} `;

      emptyClasses = "!text-warning";
      break;
    case "default":
      loadingClasses = `!bg-light-default  cursor-wait !text-light-foreground !border-light-default`;
      disableClasses = `!bg-light-default-400 dark:!bg-opacity-50 !border-light-default-400 dark:!border-opacity-0 cursor-not-allowed !text-light-foreground dark:!text-gray-300 `;
      filledClasses = `bg-light-default dark:bg-dark-default ${text} hover:bg-light-default-600 !text-light-foreground dark:!text-dark-foreground`;
      borderedClasses = ` text-light-default border-light-default `;
      ghostClasses = `!bg-opacity-40 dark:bg-dark-default dark:text-dark-foreground !text-opacity-50 text-light-foreground hover:!bg-opacity-100 hover:!text-opacity-100  `;
      borderedFilledClasses = `bg-transparent  hover:bg-light-default border-light-default dark:border-dark-default text-light-default dark:text-dark-default hover:border-light-default dark:hover:border-dark-default dark:hover:bg-dark-default dark:hover:text-dark-foreground hover:text-light-foreground`;
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
  let loaderClasses = ` border-[3px] h-full aspect-square animate-spin rounded-full ${borderedLoaderClasses} `;
  if (props.isLoading && props.variant == "bordered-filled")
    props.variant = "bordered";
  switch (props.variant) {
    case "bordered":
      sizeClasses = "py-1.5 px-4 text-md";
      switch (props.size) {
        case "sm":
          sizeClasses = "py-1 px-2.5 text-md";
          break;
        case "md":
          sizeClasses = "py-1.5 px-4 text-md";
          break;
        case "lg":
          sizeClasses = "py-2 px-[20] text-md";
          break;
      }

      variantClasses = ` border-2 ${borderedClasses} `;
      break;
    case "ghost":
      sizeClasses = "py-[8px] px-[18px] text-md";
      switch (props.size) {
        case "sm":
          sizeClasses = "py-[6px] px-[12px] text-md";
          break;
        case "md":
          sizeClasses = "py-[8px] px-[18px] text-md";
          break;
        case "lg":
          sizeClasses = "py-[10px] px-[22px] text-md";
          break;
      }

      variantClasses = ` ${ghostClasses}`;
      break;
    case "filled":
      sizeClasses = "py-[8px] px-[18px] text-md";
      switch (props.size) {
        case "sm":
          sizeClasses = "py-[6px] px-[12px] text-md";
          break;
        case "md":
          sizeClasses = "py-[8px] px-[18px] text-md";
          break;
        case "lg":
          sizeClasses = "py-[10px] px-[22px] text-md";
          break;
      }

      variantClasses = `  ${filledClasses}`;
      break;
    case "empty":
      sizeClasses = "py-[8px] px-[18px] text-md";
      switch (props.size) {
        case "sm":
          sizeClasses = "py-[6px] px-[12px] text-md";
          break;
        case "md":
          sizeClasses = "py-[8px] px-[18px] text-md";
          break;
        case "lg":
          sizeClasses = "py-[10px] px-[22px] text-md";
          break;
      }
      variantClasses = emptyClasses;
      break;
    case "bordered-filled":
      variantClasses = `border-2 ${borderedFilledClasses}`;
      sizeClasses = "py-1.5 px-4 text-md";
      switch (props.size) {
        case "sm":
          sizeClasses = "py-1 px-2.5 text-md";
          break;
        case "md":
          sizeClasses = "py-1.5 px-4 text-md";
          break;
        case "lg":
          sizeClasses = "py-2 px-[20] text-md";
          break;
      }
      break;
    case "default":
      sizeClasses = "py-[8px] px-[18px] text-md";
      switch (props.size) {
        case "sm":
          sizeClasses = "py-[6px] px-[12px] text-md";
          break;
        case "md":
          sizeClasses = "py-[8px] px-[18px] text-md";
          break;
        case "lg":
          sizeClasses = "py-[10px] px-[22px] text-md";
          break;
      }
      variantClasses =
        "border-none hover:bg-light-default dark:hover:bg-dark-default text !text-light-foreground dark:!text-dark-foreground";
      break;
    default:
      sizeClasses = "py-[8px] px-[18px] text-md";
      switch (props.size) {
        case "sm":
          sizeClasses = "py-[6px] px-[12px] text-md";
          break;
        case "md":
          sizeClasses = "py-[8px] px-[18px] text-md";
          break;
        case "lg":
          sizeClasses = "py-[10px] px-[22px] text-md";
          break;
      }

      variantClasses = `  ${filledClasses}`;

      break;
  }

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
      case "default":
        rippleBg = "bg-light-default dark:bg-dark-default";
        break;
    }
  }
  const Loader = () => {
    return (
      <div
        className={`w-full h-full absolute top-0 left-0  items-center justify-center flex ${props.variant && props.variant == "filled" ? "py-[5.5px] " : "py-1"}`}
      >
        <div className={`${loaderClasses} `} />
      </div>
    );
  };

  const baseClasses = `transition-all duration-150 relative overflow-hidden font-medium h-fit w-fit ${sizeClasses} ${rounded} ${variantClasses} ${props.isLoading ? "cursor-wait" : ""} ${props.isDisabled ? disableClasses : ""} ${props.className ? props.className : ""} ${props.isLoading ? loadingClasses : ""}`;
  const handleClick = (e: React.MouseEvent) => {
    const rippleEffect = () => {
      if (!ButtonRef.current || props.variant == "empty") return;
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
    };
    if ((!props.isDisabled && !props.isLoading) || props.variant == "empty")
      rippleEffect();

    if (props.onClick && !props.isDisabled && !props.isLoading) {
      props.onClick(e);
    }
  };
  return (
    <button
      ref={ButtonRef}
      className={baseClasses + ""}
      onClick={(e: React.MouseEvent) => handleClick(e)}
    >
      {props.isLoading && <Loader />}
      {ripples.map((ripple) => ripple.ripple)}
      <span className={`${props.isLoading ? "opacity-60" : ""}`}>
        {props.children}
      </span>
    </button>
  );
}
