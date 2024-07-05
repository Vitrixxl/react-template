export type CheckListProps = {
  radio?: boolean;
  sKeys?: (string | number | null)[];
  direction?: "row" | "column";
  onChange?: (e: (string | number | null)[]) => void;
  children?: React.ReactNode;
};

export type CheckIconsProps = {
  color?: string;
  isActive: boolean;
  size: "sm" | "md" | "lg";
};
export type CheckListContextType = {
  sKeys: (string | number | null)[];
  setSKeys: React.Dispatch<React.SetStateAction<(string | number | null)[]>>;
  radio: boolean;
};

export type CheckBoxProps = {
  size?: "sm" | "md" | "lg";
  id: string | number;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  children?: React.ReactNode;
};
