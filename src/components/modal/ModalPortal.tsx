import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";

interface IModalPortal {
  children: ReactNode;
  open: boolean;
}

const ModalPortal: FC<IModalPortal> = ({ children, open = false }) => {
  const modalRoot = document.getElementById("modal-root");

  if (!open || !modalRoot) return null;

  return ReactDOM.createPortal(children, modalRoot);
};
export default ModalPortal;
