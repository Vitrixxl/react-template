import { InputProps } from "../Props/Input";

export default function Input({ ...props }: InputProps) {
  let filledContainerClasses = ``;
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
  let colorClasses = "";
  let borderColor = "";
  switch (props.color) {
    case "primary":
      colorClasses = "bg-primary hover:bg-primary-600";
      borderColor = "border-primary"
      break;
    case "secondary":
      colorClasses = "bg-secondary hover:bg-secondary-600";
      borderColor = "border-secondary"
      break;
    case "success":
      colorClasses = "bg-success hover:bg-success-600";
      borderColor = "border-success"
      break;
    case "danger":
      colorClasses = "bg-danger hover:bg-danger-600";
      borderColor = "border-danger"
      break;
    case "warning":
      colorClasses = "bg-warning hover:bg-warning-600";
      borderColor = "border-warning"
      break;
    default:
      colorClasses = "bg-light-default dark:bg-dark-default";
  }

  let variantClasses = "";
  let fontSize = "";
  switch (props.variant) {
    case "filled":
      switch (props.size) {
        case "sm":
          variantClasses = "py-1 px-1 bg-opacity-100"
          fontSize = "text-[14px]"
          break;
        case "md":
          variantClasses = "py-2 px-2 bg-opacity-100"
          fontSize = "text-md"
          break;
        case "lg":
          variantClasses = "py-3 px-3 bg-opacity-100"
          fontSize = "text-lg"
          break;
        default:
          variantClasses = "py-2 px-2 bg-opacity-100";
          fontSize = "text-md"
      }
      break;
    case "bordered":
      switch (props.size) {
        case "sm":
          variantClasses = `py-1 px-1 !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`;
          fontSize = "text-[14px]"
          break;
        case "md":
          variantClasses = `py-2 px-2 !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`
          fontSize = "text-md"
          break;
        case "lg":
          variantClasses = `py-3 px-3 !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`
          fontSize = "text-lg"
          break;
        default:
          variantClasses = `py-2 px-2 !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`;
          fontSize = "text-md"
      }
      break;
    case "underlined":
      switch (props.size) {
        case "sm":
          variantClasses = `py-1 px-1 !bg-transparent border-b-2 ${borderColor} rounded-none`;
          fontSize = "text-[14px]"
          break;
        case "md":
          variantClasses = `py-2 px-2 !bg-transparent border-b-2 ${borderColor} rounded-none`;
          fontSize = "text-md"
          break;
        case "lg":
          variantClasses = `py-3 px-3 !bg-transparent border-b-2 ${borderColor} rounded-none`;
          fontSize = "text-lg"
          break;
        default:
          variantClasses = `py-2 px-2 !bg-transparent border-b-2 ${borderColor} rounded-none`;
          fontSize = "text-md"
      }
      break;
    default:
      switch (props.size) {
        case "sm":
          variantClasses = `py-1 px-1 !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`;
          fontSize = "text-[14px]"
          break;
        case "md":
          variantClasses = `py-2 px-2 !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`
          fontSize = "text-md"
          break;
        case "lg":
          variantClasses = `py-3 px-3 !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`
          fontSize = "text-lg"
          break;
        default:
          variantClasses = `py-2 px-2 !bg-transparent border-2 ${borderColor} hover:!bg-gray-600 hover:!bg-opacity-20`;
          fontSize = "text-md"
      }
  }
  const containerClasses = `relative ${rounded} ${variantClasses} ${colorClasses}`;
  const inputClasses = `outline-none bg-transparent text-black dark:text-white ${fontSize}`;
  const spanClasses = ` absolute top-1/2 -translate-y-1/2 text-light-default ${fontSize}`;
  const errorClasses = `text-danger text-[14px]`;
  return (
    <>
      <div className={containerClasses}>
        <label>
          {props.label ? (
            <span className={spanClasses}>{props.label}</span>
          ) : null}
          <input type={props.type || "text"} className={inputClasses} />
        </label>
      </div>
      {props.errorMessage && props.isInvalid ? (
        <span className={errorClasses}>{props.errorMessage}</span>
      ) : null}
    </>
  );
}
