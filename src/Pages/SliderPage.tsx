import Slider from "../components/Slider/Slider";

export default function SliderPage() {
  return (
    <div className="w-full ">
      <div className="max-w-6xl flex flex-col gap-6 mt-10 mx-auto ">
        <h1 className="text-3xl">
          Instead of sliding inside that girl, use our sliders
        </h1>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl">Base slider</h1>
          <div className="flex gap-4">
            <Slider
              step={5}
              min={0}
              defaultValue={[1]}
              max={100}
              label="Le slider de ses morts"
            />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
