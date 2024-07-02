import { Link, Outlet } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
export const HomePage = ({ children }: { children?: React.ReactNode }) => {
  const [clicked, setClicked] = useState<string | null>(null);
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-10">
      <div className="py-12">
        <h1 className="text-3xl font-semibold ">
          The best React template out of the box
        </h1>
      </div>
      <Link
        to="/nested"
        className="px-3 py-1 bg-blue-500 rounded-md text-white  hover:bg-blue-600 transition-all duration-100"
      >
        Go to the nested route
      </Link>
      {clicked ? (
        <h2 className="text-xl ">
          You just clicked the{" "}
          <span className="font-semibold italic">{clicked}</span> button
        </h2>
      ) : (
        <h2 className="text-xl">Please press a button</h2>
      )}
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
        <h1 className="text-xl">Filled buttons</h1>
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
      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Filled buttons</h1>
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
        <h1 className="text-xl">Filled buttons</h1>
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
      <Outlet />
    </div>
  );
};
