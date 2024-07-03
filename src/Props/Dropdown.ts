export type DropdownProps = {
  children?: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  variant?: "bordered" | "filled";
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
  rounded?: boolean;
};

export type DropdownListProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "bordered";
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
};
