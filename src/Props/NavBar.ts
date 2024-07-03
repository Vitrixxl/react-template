export type NavProps = {
  width?: "8xl" | "7xl" | "6xl";
  children?: React.ReactNode;
  background?: "transparent" | "filled" | "blured";
};

export type NavLinkProps = {
  to: string;
  subLinks: { label: string; to: string }[];
  className?: string;
};
