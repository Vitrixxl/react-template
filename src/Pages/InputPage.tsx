import Input from "../components/Input";

export default function InputPage() {
  return (
    <div className=" mt-10 flex flex-col gap-10">
      <h1 className="text-5xl font-bold text-center m-6">
        Label Default/Inside
      </h1>
      <div className=" w-full flex justify-evenly flex-wrap gap-y-10 gap-x-24">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl underline">Bordered</h1>
          <Input label="Etablissement" />
          <Input label="Etablissement" color="primary" />
          <Input label="Etablissement" color="secondary" />
          <Input label="Etablissement" color="success" placeholder="Placeholder"/>
          <Input label="Etablissement" color="warning" startContent="Start"/>
          <Input label="Etablissement" color="danger" endContent="End"/>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl underline">Filled</h1>
          <Input label="Etablissement" variant="filled" />
          <Input label="Etablissement" color="primary" variant="filled" />
          <Input label="Etablissement" color="secondary" variant="filled" />
          <Input label="Etablissement" color="success" variant="filled" />
          <Input label="Etablissement" color="warning" variant="filled" />
          <Input label="Etablissement" color="danger" variant="filled" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl underline">Underlined</h1>
          <Input label="Etablissement" variant="underlined" />
          <Input label="Etablissement" color="primary" variant="underlined" />
          <Input label="Etablissement" color="secondary" variant="underlined" />
          <Input label="Etablissement" color="success" variant="underlined" />
          <Input label="Etablissement" color="warning" variant="underlined" />
          <Input label="Etablissement" color="danger" variant="underlined" />
        </div>
      </div>
      <h1 className="text-5xl font-bold text-center m-6">Label Outside</h1>
      <div className=" w-full flex justify-evenly flex-wrap gap-y-10 gap-x-24">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl underline">Bordered</h1>
          <Input label="Etablissement" labelPlacement="outside" />
          <Input
            label="Etablissement"
            color="primary"
            labelPlacement="outside"
          />
          <Input
            label="Etablissement"
            color="secondary"
            labelPlacement="outside"
          />
          <Input
            label="Etablissement"
            color="success"
            labelPlacement="outside"
          />
          <Input
            label="Etablissement"
            color="warning"
            labelPlacement="outside"
          />
          <Input
            label="Etablissement"
            color="danger"
            labelPlacement="outside"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl underline">Filled</h1>
          <Input
            label="Etablissement"
            variant="filled"
            labelPlacement="outside"
          />
          <Input
            label="Etablissement"
            color="primary"
            variant="filled"
            labelPlacement="outside"
          />
          <Input
            label="Etablissement"
            color="secondary"
            variant="filled"
            labelPlacement="outside"
          />
          <Input
            label="Etablissement"
            color="success"
            variant="filled"
            labelPlacement="outside"
          />
          <Input
            label="Etablissement"
            color="warning"
            variant="filled"
            labelPlacement="outside"
          />
          <Input
            label="Etablissement"
            color="danger"
            variant="filled"
            labelPlacement="outside"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl underline">Underlined</h1>
          <Input
            label="Etablissement"
            variant="underlined"
            labelPlacement="outside"
          />
          <Input
            label="Etablissement"
            color="primary"
            variant="underlined"
            labelPlacement="outside"
          />
          <Input
            label="Etablissement"
            color="secondary"
            variant="underlined"
            labelPlacement="outside"
          />
          <Input
            label="Etablissement"
            color="success"
            variant="underlined"
            labelPlacement="outside"
          />
          <Input
            label="Etablissement"
            color="warning"
            variant="underlined"
            labelPlacement="outside"
          />
          <Input
            label="Etablissement"
            color="danger"
            variant="underlined"
            labelPlacement="outside"
          />
        </div>
      </div>
      <h1 className=" text-5xl font-bold text-center m-6">Label left</h1>
      <div className=" w-full flex justify-evenly flex-wrap gap-y-10 gap-x-24">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl underline">Bordered</h1>
          <Input label="Etablissement" labelPlacement="left" />
          <Input label="Etablissement" color="primary" labelPlacement="left" />
          <Input
            label="Etablissement"
            color="secondary"
            labelPlacement="left"
          />
          <Input label="Etablissement" color="success" labelPlacement="left" />
          <Input label="Etablissement" color="warning" labelPlacement="left" />
          <Input label="Etablissement" color="danger" labelPlacement="left" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl underline">Filled</h1>
          <Input label="Etablissement" variant="filled" labelPlacement="left" />
          <Input
            label="Etablissement"
            color="primary"
            variant="filled"
            labelPlacement="left"
          />
          <Input
            label="Etablissement"
            color="secondary"
            variant="filled"
            labelPlacement="left"
          />
          <Input
            label="Etablissement"
            color="success"
            variant="filled"
            labelPlacement="left"
          />
          <Input
            label="Etablissement"
            color="warning"
            variant="filled"
            labelPlacement="left"
          />
          <Input
            label="Etablissement"
            color="danger"
            variant="filled"
            labelPlacement="left"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl underline">Underlined</h1>
          <Input
            label="Etablissement"
            variant="underlined"
            labelPlacement="left"
          />
          <Input
            label="Etablissement"
            color="primary"
            variant="underlined"
            labelPlacement="left"
          />
          <Input
            label="Etablissement"
            color="secondary"
            variant="underlined"
            labelPlacement="left"
          />
          <Input
            label="Etablissement"
            color="success"
            variant="underlined"
            labelPlacement="left"
          />
          <Input
            label="Etablissement"
            color="warning"
            variant="underlined"
            labelPlacement="left"
          />
          <Input
            label="Etablissement"
            color="danger"
            variant="underlined"
            labelPlacement="left"
          />
        </div>
      </div>
    </div>
  );
}
