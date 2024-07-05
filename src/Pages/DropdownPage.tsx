import Button from "../components/Button";
import {
  DropDownTrigger,
  Dropdown,
  DropdownList,
} from "../components/Dropdown";

export default function DropdownPage() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 mt-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl">What about the dropdowns</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Here are the default dropdowns</h1>
          <div className="flex gap-4">
            <Dropdown>
              <DropDownTrigger>Click me</DropDownTrigger>
              <DropdownList>
                <Button
                  variant="default"
                  className="text-start w-full"
                  size="sm"
                >
                  First
                </Button>
                <Button
                  variant="default"
                  className="text-start w-full"
                  size="sm"
                >
                  Second
                </Button>
                <Button
                  variant="default"
                  className="text-start w-full"
                  size="sm"
                >
                  Third
                </Button>
              </DropdownList>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
