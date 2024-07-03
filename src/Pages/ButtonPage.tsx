import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonPage() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-10 py-4">
      <div>
        <h1 className="text-2xl mb-2">
          This is the button page, here you can see all the buttons that are
          available in the template
        </h1>
        <h2>
          {clicked ? (
            <h2 className="text-xl ">
              You just clicked the{" "}
              <span className="font-semibold italic">{clicked}</span> button
            </h2>
          ) : (
            <h2 className="text-xl">Please press a button</h2>
          )}
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Filled buttons</h1>
        <div className="flex gap-4">
          <Button color="primary" onClick={() => setClicked("primary")}>
            primary
          </Button>
          <Button color="secondary" onClick={() => setClicked("secondary")}>
            secondary
          </Button>

          <Button color="success" onClick={() => setClicked("success")}>
            success
          </Button>
          <Button color="warning" onClick={() => setClicked("warning")}>
            warning
          </Button>
          <Button color="danger" onClick={() => setClicked("danger")}>
            danger
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Ghost buttons</h1>
        <div className="flex gap-4">
          <Button
            color="primary"
            onClick={() => setClicked("primary")}
            variant="ghost"
          >
            primary
          </Button>
          <Button
            color="secondary"
            onClick={() => setClicked("secondary")}
            variant="ghost"
          >
            secondary
          </Button>
          <Button
            color="success"
            onClick={() => setClicked("success")}
            variant="ghost"
          >
            success
          </Button>
          <Button
            color="warning"
            onClick={() => setClicked("warning")}
            variant="ghost"
          >
            warning
          </Button>
          <Button
            color="danger"
            onClick={() => setClicked("danger")}
            variant="ghost"
          >
            danger
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Bordered-filled buttons</h1>
        <div className="flex gap-4">
          <Button
            color="primary"
            onClick={() => setClicked("primary")}
            variant="bordered-filled"
          >
            primary
          </Button>
          <Button
            color="secondary"
            onClick={() => setClicked("secondary")}
            variant="bordered-filled"
          >
            secondary
          </Button>
          <Button
            color="success"
            onClick={() => setClicked("success")}
            variant="bordered-filled"
          >
            success
          </Button>
          <Button
            color="warning"
            onClick={() => setClicked("warning")}
            variant="bordered-filled"
          >
            warning
          </Button>
          <Button
            color="danger"
            onClick={() => setClicked("danger")}
            variant="bordered-filled"
          >
            danger
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Bordered buttons</h1>
        <div className="flex gap-4">
          <Button
            color="primary"
            onClick={() => setClicked("primary")}
            variant="bordered"
          >
            primary
          </Button>
          <Button
            color="secondary"
            onClick={() => setClicked("secondary")}
            variant="bordered"
          >
            secondary
          </Button>

          <Button
            color="success"
            onClick={() => setClicked("success")}
            variant="bordered"
          >
            success
          </Button>
          <Button
            color="warning"
            onClick={() => setClicked("warning")}
            variant="bordered"
          >
            warning
          </Button>
          <Button
            color="danger"
            onClick={() => setClicked("danger")}
            variant="bordered"
          >
            danger
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl">With differents size</h1>
        <div className="flex gap-4">
          <Button color="primary" size="lg">
            Large
          </Button>
          <Button color="secondary" size="md">
            Medium
          </Button>
          <Button color="success" size="sm">
            Small
          </Button>
          <Button color="secondary" size="md">
            Medium
          </Button>
          <Button color="primary" size="lg">
            Large
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Specials features</h1>
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl">Disable</h1>
            <div className="flex gap-4">
              <Button
                color="primary"
                onClick={() => setClicked("primary")}
                variant="filled"
                isDisabled={true}
              >
                Disable
              </Button>
              <Button
                color="secondary"
                onClick={() => setClicked("primary")}
                variant="filled"
                isDisabled={true}
              >
                Disable
              </Button>
              <Button
                color="success"
                onClick={() => setClicked("primary")}
                variant="bordered"
                isDisabled={true}
              >
                Disable
              </Button>
              <Button
                color="warning"
                onClick={() => setClicked("primary")}
                variant="bordered-filled"
                isDisabled={true}
              >
                Disable
              </Button>
              <Button
                color="danger"
                onClick={() => setClicked("primary")}
                variant="bordered-filled"
                isDisabled={true}
              >
                Disable
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl">Loading</h1>
            <div className="flex gap-4">
              <Button
                color="primary"
                onClick={() => setClicked("primary")}
                variant="filled"
                isLoading={true}
              >
                Loading
              </Button>
              <Button
                color="secondary"
                onClick={() => setClicked("primary")}
                variant="filled"
                isLoading={true}
              >
                Loading
              </Button>
              <Button
                color="success"
                onClick={() => setClicked("primary")}
                variant="bordered"
                isLoading={true}
              >
                Loading
              </Button>
              <Button
                color="warning"
                onClick={() => setClicked("primary")}
                variant="bordered-filled"
                isLoading={true}
              >
                Loading
              </Button>
              <Button
                color="danger"
                onClick={() => setClicked("primary")}
                variant="bordered-filled"
                isLoading={true}
              >
                Loading
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl ">
          Feel free to copy and try by yourself the buttons in the{" "}
          <span className="text-primary font-semibold italic">ButtonPage</span>
        </h1>
        <div className="flex gap-4">
          <code>test</code>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <Button color="secondary" onClick={() => navigate("/")}>
          {"<-"}Modals
        </Button>
        <Button onClick={() => navigate("/")}>{"Modals ->"}</Button>
      </div>
    </div>
  );
}
