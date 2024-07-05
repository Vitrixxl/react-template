import React, { useRef } from "react";
import { InputProps } from "../Props/Input";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

export const validEmail = (value: string) => {
  const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegexp.test(value);
};

export default function Input({ ...props }: InputProps) {
  //#region Variables
  const [isFocus, setIsFocus] = React.useState(false);
  const [isEmpty, setIsEmpty] = React.useState(true);
  const [isPswVisible, setIsPswVisible] = React.useState(false);
  let variantClasses = "";
  let fontSize = "";
  let fontSizeLabel = "";
  let padding = "";
  let colorInvalid = "";
  let sizeError = "";
  let colorClasses = "";
  let borderColor = "";
  let labelPlacement = "";
  let margin = "";
  let rounded = "rounded-md";
  let translate = "-translate-y-1/2 top-1/2";
  let position = "absolute";
  let isPassword = false;
  fontSizeLabel = fontSize;
  //#endregion

  //#region Switch Rounded
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
  //#endregion

  //#region Switch Color
  switch (props.color) {
    case "primary":
      colorClasses = "bg-primary hover:bg-primary-600";
      borderColor = "border-primary";
      break;
    case "secondary":
      colorClasses = "bg-secondary hover:bg-secondary-600";
      borderColor = "border-secondary";
      break;
    case "success":
      colorClasses = "bg-success hover:bg-success-600";
      borderColor = "border-success";
      break;
    case "danger":
      colorClasses = "bg-danger hover:bg-danger-600";
      borderColor = "border-danger";
      break;
    case "warning":
      colorClasses = "bg-warning hover:bg-warning-600";
      borderColor = "border-warning";
      break;
    default:
      colorClasses = "bg-light-default dark:bg-dark-default hover:bg-";
      borderColor = "border-light-default dark:border-dark-default";
  }
  //#endregion

  //#region If input invalid
  if (props.isInvalid) {
    colorClasses = "bg-danger-600";
    borderColor = "border-danger-600";
    colorInvalid = "!text-danger-600";
  }
  //#endregion

  //#region Switch Variant>size
  switch (props.variant) {
    case "filled":
      switch (props.size) {
        case "sm":
          variantClasses = "pt-[6px] pb-[3px] px-[10px] bg-opacity-100";
          fontSize = "text-md";
          sizeError = "text-xs";
          break;
        case "md":
          variantClasses = " pt-[10px] pb-[5px] px-[10px] bg-opacity-100";
          fontSize = "text-lg";
          sizeError = "text-[13px]";
          break;
        case "lg":
          variantClasses = "pt-[14px] pb-[7px] px-[10px] bg-opacity-100";
          fontSize = "text-xl";
          sizeError = "text-sm";
          break;
        default:
          variantClasses = "pt-[10px] pb-[5px] px-[10px] bg-opacity-100";
          fontSize = "text-lg";
          sizeError = "text-[13px]";
      }
      break;
    case "bordered":
      switch (props.size) {
        case "sm":
          variantClasses = `pt-1 pb-[1px] px-1 !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`;
          fontSize = "text-md";
          sizeError = "text-xs";
          break;
        case "md":
          variantClasses = `pt-2 pb-[3px] px-2 !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`;
          fontSize = "text-lg";
          sizeError = "text-[13px]";
          break;
        case "lg":
          variantClasses = `pt-3 pb-[5px] px-3 !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`;
          fontSize = "text-xl";
          sizeError = "text-sm";
          break;
        default:
          variantClasses = `pt-2 pb-[3px] px-2 !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`;
          fontSize = "text-lg";
          sizeError = "text-[13px]";
      }
      break;
    case "underlined":
      switch (props.size) {
        case "sm":
          variantClasses = `pb-[1px] pt-[6px] px-[10px] !bg-transparent border-b-2 ${borderColor} rounded-none`;
          fontSize = "text-md";
          sizeError = "text-xs";
          break;
        case "md":
          variantClasses = `pb-[3px] pt-[10px] px-[10px] !bg-transparent border-b-2 ${borderColor} rounded-none`;
          fontSize = "text-lg";
          sizeError = "text-[13px]";
          break;
        case "lg":
          variantClasses = `pb-[5px] pt-[14px] px-[10px] !bg-transparent border-b-2 ${borderColor} rounded-none`;
          fontSize = "text-xl";
          sizeError = "text-sm";
          break;
        default:
          variantClasses = `pb-[3px] pt-[10px] px-[10px] !bg-transparent border-b-2 ${borderColor} rounded-none`;
          fontSize = "text-lg";
          sizeError = "text-[13px]";
      }
      break;
    default:
      switch (props.size) {
        case "sm":
          variantClasses = `pt-1 pb-[1px] px-[10px] !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`;
          fontSize = "text-md";
          sizeError = "text-xs";
          break;
        case "md":
          variantClasses = `pt-2 pb-[3px] px-[10px] !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`;
          fontSize = "text-lg";
          sizeError = "text-[13px]";
          break;
        case "lg":
          variantClasses = `pt-3 pb-[5px] px-[10px] !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`;
          fontSize = "text-xl";
          sizeError = "text-sm";
          break;
        default:
          variantClasses = `pt-2 pb-[3px] px-[10px] !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`;
          fontSize = "text-lg";
          sizeError = "text-[13px]";
      }
  }
  //#endregion

  //#region Condition Placeholder>LabelPlacement>size
  if (props.placeholder) {
    switch (props.labelPlacement) {
      case "inside":
        switch (props.size) {
          case "sm":
            labelPlacement = "-translate-y-full pb-[2px]";
            padding = "pt-[6px]";
            fontSizeLabel = "text-[10px]";
            break;
          case "md":
            labelPlacement = "-translate-y-full pb-1";
            padding = "pt-2";
            fontSizeLabel = "text-[12px]";
            break;
          case "lg":
            labelPlacement = "-translate-y-full pb-[6px]";
            padding = "pt-3";
            fontSizeLabel = "text-[14px]";
            break;
          default:
            labelPlacement = "-translate-y-full pb-1";
            padding = "pt-2";
            fontSizeLabel = "text-[12px]";
        }
        break;
      case "outside":
        switch (props.size) {
          case "sm":
            labelPlacement = "-translate-y-full left-0 pb-[2px]";
            margin = "mt-1";
            break;
          case "md":
            labelPlacement = "-translate-y-full left-0 pb-1";
            margin = "mt-2";
            break;
          case "lg":
            labelPlacement = "-translate-y-full left-0 pb-[6px]";
            margin = "mt-3";
            break;
          default:
            labelPlacement = "-translate-y-full left-0 pb-1";
            margin = "mt-2";
        }
        break;
      case "left":
        translate = "";
        switch (props.size) {
          case "sm":
            labelPlacement = "-left-1/2 mx-2";
            position = "";
            break;
          case "md":
            labelPlacement = "-left-1/2 mx-2";
            position = "";
            break;
          case "lg":
            labelPlacement = "-left-1/2 mx-2";
            position = "";
            break;
          default:
            labelPlacement = "-left-1/2 mx-2";
            position = "";
        }
        break;
      default:
        switch (props.size) {
          case "sm":
            labelPlacement = "-translate-y-full pb-[3px]";
            padding = "pt-[6px]";
            fontSizeLabel = "text-[10px]";
            break;
          case "md":
            labelPlacement = "-translate-y-full pb-1";
            padding = "pt-2";
            fontSizeLabel = "text-[12px]";
            break;
          case "lg":
            labelPlacement = "-translate-y-full pb-[6px]";
            padding = "pt-3";
            fontSizeLabel = "text-[14px]";
            break;
          default:
            labelPlacement = "-translate-y-full pb-1";
            padding = "pt-2";
            fontSizeLabel = "text-[12px]";
        }
    }
  } else {
    switch (props.labelPlacement) {
      case "inside":
        if (isFocus || props.startContent || props.endContent) {
          switch (props.size) {
            case "sm":
              labelPlacement = "-translate-y-full pb-[2px]";
              padding = "pt-[6px]";
              fontSizeLabel = "text-[12px]";
              break;
            case "md":
              labelPlacement = "-translate-y-full pb-1";
              padding = "pt-2";
              fontSizeLabel = "text-[14px]";
              break;
            case "lg":
              labelPlacement = "-translate-y-full pb-[6px]";
              padding = "pt-3";
              fontSizeLabel = "text-[16px]";
              break;
            default:
              labelPlacement = "-translate-y-full pb-1";
              padding = "pt-2";
              fontSizeLabel = "text-[14px]";
          }
        } else {
          switch (props.size) {
            case "sm":
              labelPlacement = "";
              padding = "pt-[6px]";
              break;
            case "md":
              labelPlacement = "";
              padding = "pt-2";
              break;
            case "lg":
              labelPlacement = "";
              padding = "pt-3";
              break;
            default:
              labelPlacement = "";
              padding = "pt-2";
          }
        }
        break;
      case "outside":
        if (isFocus || props.startContent || props.endContent) {
          switch (props.size) {
            case "sm":
              labelPlacement = "-translate-y-full -translate-x-[10px] pb-[4px]";
              translate = "";
              margin = "mt-1";
              break;
            case "md":
              labelPlacement = "-translate-y-full -translate-x-[10px] pb-[8px]";
              translate = "";
              margin = "mt-2";
              break;
            case "lg":
              labelPlacement =
                "-translate-y-full -translate-x-[10px] pb-[12px]";
              translate = "";
              margin = "mt-3";
              break;
            default:
              labelPlacement = "-translate-y-full -translate-x-[10px] pb-[8px]";
              translate = "";
              margin = "mt-2";
          }
        } else {
          switch (props.size) {
            case "sm":
              labelPlacement = "";
              margin = "mt-1";
              break;
            case "md":
              labelPlacement = "";
              margin = "mt-2";
              break;
            case "lg":
              labelPlacement = "";
              margin = "mt-3";
              break;
            default:
              labelPlacement = "";
              margin = "mt-2";
          }
        }
        break;
      case "left":
        translate = "";
        switch (props.size) {
          case "sm":
            labelPlacement = "-left-1/2 mx-2";
            position = "";
            break;
          case "md":
            labelPlacement = "-left-1/2 mx-2";
            position = "";
            break;
          case "lg":
            labelPlacement = "-left-1/2 mx-2";
            position = "";
            break;
          default:
            labelPlacement = "-left-1/2 mx-2";
            position = "";
        }
        break;
      default:
        if (isFocus || props.startContent || props.endContent) {
          switch (props.size) {
            case "sm":
              labelPlacement = "-translate-y-full pb-[3px]";
              padding = "pt-[6px]";
              fontSizeLabel = "text-[12px]";
              break;
            case "md":
              labelPlacement = "-translate-y-full pb-1";
              padding = "pt-2";
              fontSizeLabel = "text-[14px]";
              break;
            case "lg":
              labelPlacement = "-translate-y-full pb-[6px]";
              padding = "pt-3";
              fontSizeLabel = "text-[16px]";
              break;
            default:
              labelPlacement = "-translate-y-full pb-1";
              padding = "pt-2";
              fontSizeLabel = "text-[14px]";
          }
        } else {
          switch (props.size) {
            case "sm":
              labelPlacement = "";
              padding = "pt-[6px]";
              break;
            case "md":
              labelPlacement = "";
              padding = "pt-2";
              break;
            case "lg":
              labelPlacement = "";
              padding = "pt-3";
              break;
            default:
              labelPlacement = "";
              padding = "pt-2";
          }
        }
    }
  }
  //#endregion

  //#region Constantes de Classes Tailwindcss avec variables ${}
  const inputRef = useRef<HTMLInputElement>(null);
  const containerClasses = `relative ${rounded} ${variantClasses} ${colorClasses} ${margin}`;
  const inputClasses = `outline-none bg-transparent text-light-foreground dark:text-light-default placeholder:text-dark-default dark:placeholder:text-light-placeholder placeholder:italic ${fontSize} ${padding} ${colorInvalid}`;
  const spanClasses = ` ${position} text-light-foreground dark:text-light-default cursor-text transition-all duration-250 ${fontSizeLabel} ${labelPlacement} ${translate} ${colorInvalid} `;
  const errorClasses = `text-danger-600 ${sizeError} h-3 flex`;
  const startContentClasses = `text-light-foreground dark:text-light-default mr-1 ${fontSize}`;
  const endContentClasses = `text-light-foreground dark:text-light-default ml-1 ${fontSize}`;
  //#endregion

  //#region Fonctions asynchrones
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value != "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };
  const pswVisible = () => {
    if (inputRef.current != null) {
      if (inputRef.current.type == "text") {
        inputRef.current.type = "password";
        setIsPswVisible(false);
      } else {
        inputRef.current.type = "text";
        setIsPswVisible(true);
      }
    }
  };
  //#endregion

  if (props.type == "password") {
    isPassword = true;
  }

  //#region Return
  return (
    <div>
      {props.labelPlacement === "left" ? (
        <div className=" flex items-center">
          {props.label ? (
            <span className={spanClasses}>{props.label}</span>
          ) : null}
          <div className={containerClasses}>
            {props.startContent ? (
              <div className="flex items-end">
                {props.endContent ? (
                  <>
                    <div className={startContentClasses}>
                      {props.startContent}
                    </div>
                    <input
                      ref={inputRef}
                      type={props.type || "text"}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        change(e);
                      }}
                      onFocus={() => {
                        setIsFocus(true);
                      }}
                      onBlur={() => {
                        if (isEmpty) {
                          setIsFocus(!isFocus);
                        }
                      }}
                      className={inputClasses}
                      placeholder={props.placeholder || ""}
                    />
                    <div className={endContentClasses}>{props.endContent}</div>
                    {isPassword ? (
                      <>
                        {isPswVisible ? (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEyeOff onClick={pswVisible} />
                          </div>
                        ) : (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEye onClick={pswVisible} />
                          </div>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <>
                    <div className={startContentClasses}>
                      {props.startContent}
                    </div>
                    <input
                      ref={inputRef}
                      type={props.type || "text"}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        change(e);
                      }}
                      onFocus={() => {
                        setIsFocus(true);
                      }}
                      onBlur={() => {
                        if (isEmpty) {
                          setIsFocus(!isFocus);
                        }
                      }}
                      className={inputClasses}
                      placeholder={props.placeholder || ""}
                    />
                    {isPassword ? (
                      <>
                        {isPswVisible ? (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEyeOff onClick={pswVisible} />
                          </div>
                        ) : (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEye onClick={pswVisible} />
                          </div>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </div>
            ) : (
              <>
                {props.endContent ? (
                  <div className="flex items-end">
                    <input
                      ref={inputRef}
                      type={props.type || "text"}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        change(e);
                      }}
                      onFocus={() => {
                        setIsFocus(true);
                      }}
                      onBlur={() => {
                        if (isEmpty) {
                          setIsFocus(!isFocus);
                        }
                      }}
                      className={inputClasses}
                      placeholder={props.placeholder || ""}
                    />
                    <div className={endContentClasses}>{props.endContent}</div>
                    {isPassword ? (
                      <>
                        {isPswVisible ? (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEyeOff onClick={pswVisible} />
                          </div>
                        ) : (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEye onClick={pswVisible} />
                          </div>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                ) : (
                  <div className="flex items-end">
                    <input
                      ref={inputRef}
                      type={props.type || "text"}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        change(e);
                      }}
                      onFocus={() => {
                        setIsFocus(true);
                      }}
                      onBlur={() => {
                        if (isEmpty) {
                          setIsFocus(!isFocus);
                        }
                      }}
                      className={inputClasses}
                      placeholder={props.placeholder || ""}
                    />
                    {isPassword ? (
                      <>
                        {isPswVisible ? (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEyeOff onClick={pswVisible} />
                          </div>
                        ) : (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEye onClick={pswVisible} />
                          </div>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <div className={containerClasses}>
          <label>
            {props.label ? (
              <span className={spanClasses}>{props.label}</span>
            ) : null}
            {props.startContent ? (
              <div className="flex items-end">
                {props.endContent ? (
                  <>
                    <div className={startContentClasses}>
                      {props.startContent}
                    </div>
                    <input
                      ref={inputRef}
                      type={props.type || "text"}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        change(e);
                      }}
                      onFocus={() => {
                        setIsFocus(true);
                      }}
                      onBlur={() => {
                        if (isEmpty) {
                          setIsFocus(!isFocus);
                        }
                      }}
                      className={inputClasses}
                      placeholder={props.placeholder || ""}
                    />
                    <div className={endContentClasses}>{props.endContent}</div>
                    {isPassword ? (
                      <>
                        {isPswVisible ? (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEyeOff onClick={pswVisible} />
                          </div>
                        ) : (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEye onClick={pswVisible} />
                          </div>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <>
                    <div className={startContentClasses}>
                      {props.startContent}
                    </div>
                    <input
                      ref={inputRef}
                      type={props.type || "text"}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        change(e);
                      }}
                      onFocus={() => {
                        setIsFocus(true);
                      }}
                      onBlur={() => {
                        if (isEmpty) {
                          setIsFocus(!isFocus);
                        }
                      }}
                      className={inputClasses}
                      placeholder={props.placeholder || ""}
                    />
                    {isPassword ? (
                      <>
                        {isPswVisible ? (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEyeOff onClick={pswVisible} />
                          </div>
                        ) : (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEye onClick={pswVisible} />
                          </div>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </div>
            ) : (
              <>
                {props.endContent ? (
                  <div className="flex items-end">
                    <input
                      ref={inputRef}
                      type={props.type || "text"}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        change(e);
                      }}
                      onFocus={() => {
                        setIsFocus(true);
                      }}
                      onBlur={() => {
                        if (isEmpty) {
                          setIsFocus(!isFocus);
                        }
                      }}
                      className={inputClasses}
                      placeholder={props.placeholder || ""}
                    />
                    <div className={endContentClasses}>{props.endContent}</div>
                    {isPassword ? (
                      <>
                        {isPswVisible ? (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEyeOff onClick={pswVisible} />
                          </div>
                        ) : (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEye onClick={pswVisible} />
                          </div>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                ) : (
                  <div className="flex items-end">
                    <input
                      ref={inputRef}
                      type={props.type || "text"}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        change(e);
                      }}
                      onFocus={() => {
                        setIsFocus(true);
                      }}
                      onBlur={() => {
                        if (isEmpty) {
                          setIsFocus(!isFocus);
                        }
                      }}
                      className={inputClasses}
                      placeholder={props.placeholder || ""}
                    />
                    {isPassword ? (
                      <>
                        {isPswVisible ? (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEyeOff onClick={pswVisible} />
                          </div>
                        ) : (
                          <div className=" text-light-foreground dark:text-light-default ml-1 mb-1">
                            <IoEye onClick={pswVisible} />
                          </div>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                )}
              </>
            )}
          </label>
        </div>
      )}
      {props.errorMessage && props.isInvalid ? (
        <span className={errorClasses}>{props.errorMessage}</span>
      ) : null}
    </div>
  );
  //#endregion
}
