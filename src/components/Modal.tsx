import Button from "./Button";
import { useEffect, useState, useRef } from "react";
import { ModalProps } from "../Props/Modal";
import { IoClose } from "react-icons/io5";
const Modal = ({ ...props }: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(
    (props.isOpen && props.isOpen) || false,
  );

  const modalRef = useRef<HTMLDivElement>(null);
  const modalRef2 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (document.body) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
    if (!modalRef.current) return;

    modalRef.current.addEventListener("click", (e) => {
      if (e.target === modalRef.current || e.target === modalRef2.current) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    });
  }, [modalRef, isOpen]);
  let bgVariantClasses = "bg-black   modal-bg";
  switch (props.bgVariant) {
    case "blur":
      bgVariantClasses = `bg-blur`;
      break;
    case "transparent":
      bgVariantClasses = `bg-transparent`;
      break;
  }
  let bgContentClasses = "bg-background";
  switch (props.bgContent) {
    case "background":
      bgContentClasses = `bg-background`;
      break;
    case "foreground":
      bgContentClasses = `bg-foreground`;
      break;
  }
  let rounded = "rounded-xl";
  switch (props.roundedContent) {
    case "full":
      rounded = "rounded-full";
      break;
    case "lg":
      rounded = "rounded-lg";
      break;
    case "md":
      rounded = "rounded-md";
      break;
    case "sm":
      rounded = "rounded-sm";
      break;
    case "none":
      rounded = "rounded-none";
      break;
  }
  const CloseButton = () => {
    return (
      <div>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-1 right-1 hover:bg-danger hover:text-white transition-all duration-100 p-1 rounded-full"
        >
          <IoClose className="size-5" />
        </button>
      </div>
    );
  };
  let borderClasses = `border-[3px] ${props.bgContent && props.bgContent == "background" ? "border-background" : "border-foreground"}`;
  let containerScrollClasses: string = "overflow-y-auto max-h-full";

  const containerClasses = `flex items-center justify-center fixed top-0 left-0 w-full py-6 min-h-[100dvh] max-h-[100dvh] z-50  h-full ${bgVariantClasses} ${props.scrollType && props.scrollType == "outside" ? containerScrollClasses : ""} `;
  const contentClasses = `relative modal-content px-6 pb-2 flex flex-col max-h-full max-w-xl max-w-sm  mx-auto ${bgContentClasses} ${rounded} ${props.borderedContent ? borderClasses : ""}`;
  return (
    <>
      <Button
        variant={props.btnVariant}
        color={props.btnColor}
        size={props.btnSize}
        rounded={props.btnRounded}
        textColor={props.btnTextColor}
        onClick={() => setIsOpen(true)}
      >
        Modal
      </Button>
      {isOpen && (
        <div ref={modalRef} className={` ${containerClasses}`}>
          <div className="w-full " ref={modalRef2}>
            <div className={`${contentClasses}`}>
              <CloseButton />
              {props.title && (
                <div className="py-2 flex justify-between border-opacity-50">
                  <h2 className="text-xl font-semibold w-fit ">
                    {props.title}
                  </h2>
                </div>
              )}
              <div className="max-h-full overflow-y-auto flex flex-col">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
