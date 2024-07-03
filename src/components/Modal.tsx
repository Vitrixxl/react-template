import Button from "./Button";
import { useEffect, useState, useRef, createContext, useContext } from "react";
import { ModalProps } from "../Props/Modal";
import { IoClose } from "react-icons/io5";
const ModalContext = createContext<boolean>(true);

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
    document?.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
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
  let bgContentClasses = "bg-light-background dark:bg-dark-background";

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
      <ModalContext.Provider value={true}>
        <div className="absolute top-1 right-1">
          <button
            onClick={() => setIsOpen(false)}
            className=" hover:bg-danger hover:bg-opacity-50 hover:text-white transition-all duration-100 p-0.5 rounded-full"
          >
            <IoClose className="size-5" />
          </button>
        </div>
      </ModalContext.Provider>
    );
  };

  let borderColor = "border-light-foreground dark:border-dark-foreground";
  switch (props.borderColor) {
    case "primary":
      borderColor = "border-primary";
      break;
    case "secondary":
      borderColor = "border-secondary";
      break;
    case "success":
      borderColor = "border-success";
      break;
    case "danger":
      borderColor = "border-danger";
      break;
    case "warning":
      borderColor = "border-warning";
      break;
  }
  let animationClasses = "from-fade";
  switch (props.contentAnimation) {
    case "fade":
      animationClasses = "from-fade";
      break;
    case "left":
      animationClasses = "from-left";
      break;
    case "right":
      animationClasses = "from-right";
      break;
    case "top":
      animationClasses = "from-top";
      break;
    case "bottom":
      animationClasses = "from-bottom";
      break;
    case "none":
      animationClasses = "";
      break;
  }
  let borderClasses = `border-[2px] ${borderColor}`;
  let containerScrollClasses: string = "overflow-y-auto max-h-full";

  const containerClasses = `flex items-center justify-center fixed top-0 left-0 w-full py-6 min-h-[100dvh] max-h-[100dvh] z-50  h-full ${bgVariantClasses} ${props.scrollType && props.scrollType == "outside" ? containerScrollClasses : ""} `;
  const contentClasses = ` relative   px-7  flex flex-col max-h-full max-w-xl  min-w-[300px] ${animationClasses}  ${bgContentClasses} ${rounded} ${props.borderedContent ? borderClasses : ""}`;
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
        {props.label}
      </Button>
      {isOpen && (
        <div ref={modalRef} className={` ${containerClasses}`}>
          <div className={`${contentClasses}`}>
            <CloseButton />
            <div className=" overflow-y-auto max-h-[90dvh] flex flex-col py-4">
              {props.children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;

export const ModalHeader = ({ children }: { children?: React.ReactNode }) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalHeader must be used inside Modal");

  return (
    <div className="py-1">
      <h2 className="text-xl font-semibold w-fit ">{children}</h2>
    </div>
  );
};

export const ModalContent = ({ children }: { children?: React.ReactNode }) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalContent must be used inside Modal");
  return (
    <div className="max-h-full overflow-y-auto flex flex-col py-4">
      {children}
    </div>
  );
};
