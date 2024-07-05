export type LinkProps = {
  href: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
};
