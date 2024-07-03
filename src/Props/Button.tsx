export type ButtonProps = {
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
  size?: "sm" | "md" | "lg";
  variant?: "ghost" | "bordered" | "filled" | "bordered-filled";
  textColor?: "white" | "black";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  isLoading?: boolean;
};
