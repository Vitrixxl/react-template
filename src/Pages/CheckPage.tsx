import { useState } from "react";
import CheckList, { CheckBox } from "../components/CheckList";

export default function CheckPage() {
  const [checkedList, setCheckedList] = useState<(string | number | null)[]>(
    [],
  );
  const [radioList, setRadioList] = useState<string | null | number>(null);
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <h1 className="text-3xl">
          One of the most useful input, the checkboxs
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Check list</h1>
          <div className="flex gap-10">
            <CheckList
              direction="row"
              onChange={(e: (string | number | null)[]) => {
                if (e !== null) {
                  setCheckedList(e);
                }
              }}
            >
              <CheckBox id={1} color="primary">
                Primary
              </CheckBox>
              <CheckBox id={2} color="secondary">
                Secondary
              </CheckBox>
              <CheckBox id={3} color="success">
                success
              </CheckBox>
              <CheckBox id={4} color="warning">
                warning
              </CheckBox>
              <CheckBox id={5} color="danger">
                danger
              </CheckBox>
            </CheckList>
            <h2 className="text-lg">
              The current selected checkboxs are:{" "}
              <span className="font-semibold">{checkedList.join(", ")}</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Radio list</h1>
          <div className="flex gap-10">
            <CheckList
              direction="row"
              onChange={(e: (string | number | null)[]) => {
                if (e[0]) {
                  setRadioList(e[0]);
                }
              }}
              radio={true}
            >
              <CheckBox id={1} color="primary">
                Primary
              </CheckBox>
              <CheckBox id={2} color="secondary">
                Secondary
              </CheckBox>
              <CheckBox id={3} color="success">
                success
              </CheckBox>
              <CheckBox id={4} color="warning">
                warning
              </CheckBox>
              <CheckBox id={5} color="danger">
                danger
              </CheckBox>
            </CheckList>
            <h2 className="text-lg">
              The current selected radio's id is:{" "}
              <span className="font-semibold"> {radioList}</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Check list</h1>
          <div className="flex gap-10">
            <CheckList direction="row">
              <CheckBox id={1} color="primary" size="lg">
                Primary
              </CheckBox>
              <CheckBox id={2} color="secondary">
                Secondary
              </CheckBox>
              <CheckBox id={3} color="success" size="sm">
                success
              </CheckBox>
              <CheckBox id={4} color="warning">
                warning
              </CheckBox>
              <CheckBox id={5} color="danger" size="lg">
                danger
              </CheckBox>
            </CheckList>
          </div>
        </div>
      </div>
    </div>
  );
}
