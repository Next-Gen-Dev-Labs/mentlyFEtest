import Image from "next/image";
import { ReactNode } from "react";
import cancel from "@/assets/cancel.png";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex justify-end">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300"
        onClick={onClose}
      ></div>
      <div className="bg-white h-full w-[450px] overflow-x-hidden overflow-y-auto z-10 relative shadow-xl">
        <button
          className="absolute top-4 right-4 cursor-pointer "
          onClick={onClose}
        >
          <Image src={cancel} alt="Close" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
