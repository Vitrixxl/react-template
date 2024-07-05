export type SliderProps = {
  label?: string;
  className?: string;
  min?: number;
  max?: number;
  defaultValue?: [number, number] | [number];
  step?: number;
  visibleSteps?: number[];
  value?: number;
  onChange?: (e: number) => void;
  disabled?: boolean;
  color?: string;
  size?: "sm" | "md" | "lg";
  vertical?: boolean;
  tooltip?: boolean;
};
export type InvisibleSliderType = {
  value: number;
  min: number;
  max: number;
};
