export type ModalProps = {
  bgVariant?: "blur" | "dark" | "transparent";
  children?: React.ReactNode;
  btnVariant?: "filled" | "bordered" | "ghost" | "bordered-filled";
  btnColor?: "primary" | "secondary" | "success" | "danger" | "warning";
  btnSize?: "sm" | "md" | "lg";
  btnRounded?: "none" | "sm" | "md" | "lg" | "full";
  btnTextColor?: "white" | "black";
  label?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  bgContent?: "background" | "foreground";
  borderedContent?: boolean;
  roundedContent?: "none" | "sm" | "md" | "lg" | "full";
  scrollType?: "inside" | "outside";
  title?: string;
};
