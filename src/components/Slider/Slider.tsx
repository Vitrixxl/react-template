import { useState, useEffect, useRef } from "react";

import { InvisibleSliderType, SliderProps } from "../../Props/Slider";

export default function Slider({ ...props }: SliderProps) {
  const isMultiple: boolean =
    props.defaultValue && props.defaultValue[1] ? true : false;

  const max = props.max || 100;
  const step = props.step || max / 100;
  const min = props.min || 0;

  const totalSteps = (max - min) / step;
  const [start, setStart] = useState<number>(
    props.defaultValue && props.defaultValue[0] ? props.defaultValue[0] : min,
  );

  const [end, setEnd] = useState<number>(
    props.defaultValue && props.defaultValue[1] ? props.defaultValue[1] : max,
  );

  const [left, setLeft] = useState<number>(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const firstThumb = useRef<HTMLDivElement>(null);
  const secondThumb = useRef<HTMLDivElement>(null);

  // const handleChangePosition = (e: MouseEvent) => {
  //   if (!trackRef.current || !thumbRef.current) return;
  //   const trackWidth = trackRef.current.offsetWidth;
  //   const trackRect = trackRef.current.getBoundingClientRect();
  //   const clickX = e.clientX - trackRect.left;
  //   const clickOffset = clickX;
  //   const clickOffsetPercent = clickOffset / trackWidth;
  //   const totalSteps = (max - min) / step;
  //   const stepPercent = 1 / totalSteps;
  //   const stepValue = Math.round(clickOffsetPercent / stepPercent) * step;
  //   const adjustedValue = parseFloat(
  //     Math.min(Math.max(min + stepValue, min), max).toFixed(2),
  //   );

  //   setValue(adjustedValue);
  // };

  const handleFirstThumbMove = (e: MouseEvent) => {
    // Assurez-vous que les références et les variables nécessaires sont définies
    if (
      !firstThumb.current ||
      !trackRef.current ||
      typeof totalSteps === "undefined" ||
      typeof step === "undefined"
    )
      return;

    const track = trackRef.current;
    const trackWidth = track.offsetWidth;
    const trackRect = track.getBoundingClientRect();
    const clicX = e.clientX - trackRect.left;
    const clicPercent = clicX / trackWidth;
    const stepPercent = 1 / totalSteps;
    const stepValue = Math.round(clicPercent / stepPercent) * step;
    const adjustedValue = parseFloat(
      Math.min(Math.max(min + stepValue, min), max).toFixed(2),
    );

    // Simplification de la logique de validation
    if (adjustedValue > max) {
      setStart(max);
    } else if (adjustedValue < min) {
      setStart(min);
    } else {
      console.log(adjustedValue);
      setStart(adjustedValue);
    }
  };

  const handleSecondThumbMove = (e: MouseEvent) => {};

  const handleFirstThumbMouseDown = () => {
    document.addEventListener("mousemove", handleFirstThumbMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  const handleSecondThumbMouseDown = () => {
    document.addEventListener("mousemove", handleSecondThumbMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  const handleMouseDown = () => {
    // document.addEventListener("mousemove", handleChangePosition);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    // document.removeEventListener("mousemove", handleChangePosition);
    document.removeEventListener("mousemove", handleFirstThumbMove);
    document.removeEventListener("mousemove", handleSecondThumbMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const Steps = () => {
    if (!props.visibleSteps) return;

    const positions: number[] = props.visibleSteps.map((step) => {
      const val = parseFloat(
        Math.min(Math.max(min + step, min), max).toFixed(2),
      );
      return ((val - min) / (max - min)) * 100;
    });

    console.log(positions);

    return (
      <div className="flex gap-4">
        {positions.map((leftPos) => (
          <div
            style={{ left: `${leftPos}%` }}
            className="size-2 bg-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 rounded-full z-50"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-w-[300px] flex flex-col gap-2 ">
      {props.label && <h2 className="text-lg ">{props.label}</h2>}
      <div className="flex gap-4 items-center ">
        <div
          ref={trackRef}
          className="w-full relative h-3 flex-shrink-0 bg-light-default dark:bg-dark-default rounded-full cursor-pointer"
          onMouseDown={handleMouseDown}
        >
          <Steps />
          <div
            className="h-full bg-primary rounded-full"
            style={{ left: "0px", width: left + "%" }}
          />
          {props.defaultValue ? (
            props.defaultValue.map((_, i) => (
              <div
                ref={i == 0 ? firstThumb : secondThumb}
                onMouseDown={handleFirstThumbMouseDown}
                className="size-5 rounded-full select-none bg-light-default dark:bg-dark-default border-[3px] border-primary absolute top-1/2 -translate-x-1/2 -translate-y-1/2 "
                style={{ left: `${start}%` }}
              >
                <InvisibleSlider
                  min={i == 0 ? min : start}
                  max={i == 0 ? end : max}
                  value={i == 0 ? start : end}
                />
              </div>
            ))
          ) : (
            <div
              ref={firstThumb}
              onMouseDown={handleFirstThumbMouseDown}
              className="size-5 rounded-full test select-none bg-light-default dark:bg-dark-default border-[3px] border-primary absolute top-1/2 -translate-x-1/2 -translate-y-1/2 "
              style={{ left: `${start}%` }}
            >
              <InvisibleSlider min={min} max={max} value={start} />
            </div>
          )}
        </div>
        {/* <h2>{value}</h2> */}
      </div>
    </div>
  );
}

const InvisibleSlider = ({ ...props }: InvisibleSliderType) => {
  return (
    <input
      style={{
        border: "0",
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        width: "1px",
      }}
      type="range"
      value={props.value}
      min={props.min}
      max={props.max}
    />
  );
};
