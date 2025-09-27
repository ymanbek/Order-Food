import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

interface ModalContentProps {
  children: React.ReactNode;
}

interface BackdropProps {
  onClose: () => void;
}

const ModalContent = ({ children }: ModalContentProps) => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg w-[600px] max-h-[80vh] overflow-y-auto overscroll-contain p-6 z-50 ">
      {children}
    </div>
  );
};

const Backdrop = ({ onClose }: BackdropProps) => {
  return (
    <div
      onClick={onClose}
      className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-40 "
    ></div>
  );
};

const Modal = (props: ModalProps) => {
  const { onClose, children, isOpen } = props;
  return (
    isOpen &&
    createPortal(
      <>
        <Backdrop onClose={onClose} />
        <ModalContent>{children}</ModalContent>
      </>,
      document.getElementById("modal")!
    )
  );
};

export default Modal;
