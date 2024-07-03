import Modal, { ModalContent, ModalHeader } from "../components/Modal";
export default function ModalPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full ">
        <div className=" mt-10 max-w-6xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl">
              Now let's take a look to modals, here are the bases modals
            </h1>
            <div className="flex gap-4">
              <Modal btnVariant="filled" label="primary" btnColor="primary">
                <ModalHeader>Primary Modal</ModalHeader>
                <ModalContent>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde reiciendis maxime eos dolor magni possimus voluptatum,
                    sint ratione nulla quis quod nisi laborum eius. Consequatur
                    eum fugit facere eaque repellendus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde reiciendis maxime eos dolor magni possimus voluptatum,
                    sint ratione nulla quis quod nisi laborum eius. Consequatur
                    eum fugit facere eaque repellendus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde reiciendis maxime eos dolor magni possimus voluptatum,
                    sint ratione nulla quis quod nisi laborum eius. Consequatur
                    eum fugit facere eaque repellendus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde reiciendis maxime eos dolor magni possimus voluptatum,
                    sint ratione nulla quis quod nisi laborum eius. Consequatur
                    eum fugit facere eaque repellendus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde reiciendis maxime eos dolor magni possimus voluptatum,
                    sint ratione nulla quis quod nisi laborum eius. Consequatur
                    eum fugit facere eaque repellendus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde reiciendis maxime eos dolor magni possimus voluptatum,
                    sint ratione nulla quis quod nisi laborum eius. Consequatur
                    eum fugit facere eaque repellendus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde reiciendis maxime eos dolor magni possimus voluptatum,
                    sint ratione nulla quis quod nisi laborum eius. Consequatur
                    eum fugit facere eaque repellendus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde reiciendis maxime eos dolor magni possimus voluptatum,
                    sint ratione nulla quis quod nisi laborum eius. Consequatur
                    eum fugit facere eaque repellendus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde reiciendis maxime eos dolor magni possimus voluptatum,
                    sint ratione nulla quis quod nisi laborum eius. Consequatur
                    eum fugit facere eaque repellendus.
                  </p>
                </ModalContent>
              </Modal>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">With different appear animation</h1>
              <div className="flex gap-4">
                <Modal
                  btnVariant="filled"
                  label="Left animation"
                  btnColor="primary"
                  contentAnimation="left"
                >
                  <ModalHeader>Primary Modal</ModalHeader>
                  <ModalContent>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                  </ModalContent>
                </Modal>
                <Modal
                  btnVariant="filled"
                  label="Bottom animation"
                  btnColor="primary"
                  contentAnimation="bottom"
                >
                  <ModalHeader>Primary Modal</ModalHeader>
                  <ModalContent>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                  </ModalContent>
                </Modal>
                <Modal
                  btnVariant="filled"
                  label="Right animation"
                  btnColor="primary"
                  contentAnimation="right"
                >
                  <ModalHeader>Primary Modal</ModalHeader>
                  <ModalContent>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                  </ModalContent>
                </Modal>
                <Modal
                  btnVariant="filled"
                  label="Top animation"
                  btnColor="primary"
                  contentAnimation="top"
                >
                  <ModalHeader>Primary Modal</ModalHeader>
                  <ModalContent>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                  </ModalContent>
                </Modal>
                <Modal
                  btnVariant="filled"
                  label="Fade animation"
                  btnColor="primary"
                  contentAnimation="fade"
                >
                  <ModalHeader>Primary Modal</ModalHeader>
                  <ModalContent>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde reiciendis maxime eos dolor magni possimus
                      voluptatum, sint ratione nulla quis quod nisi laborum
                      eius. Consequatur eum fugit facere eaque repellendus.
                    </p>
                  </ModalContent>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
