export type InputProps = {
  children?: React.ReactNode;
  className?: string;
  placeholder?: string;
  isDisabled?: boolean;
  label?: string;
  value?: string;
  onChange?: () => void;
  errorMessage?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isRequired?: boolean;
  isClearable?: boolean;
  labelPlacement?: "left" | "inside" | "outside-left" ;
  type?: "text" | "password" | "email" | "file";
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
  size?: "sm" | "md" | "lg";
  variant?: "flat" | "bordered" | "underlined" | "faded";
  rounded?: "none" | "sm" | "md" | "lg" ;
};