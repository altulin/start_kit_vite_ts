import { FC, ReactNode, useContext } from "react";
import ReactDOM from "react-dom";
import { ModalProvider } from "./ModalManager";

interface IModalPortal {
  children: ReactNode;
  open: boolean;
}

const ModalPortal: FC<IModalPortal> = ({ children, open = false }) => {
  const modalRootEl = useContext(ModalProvider);

  if (!open || !modalRootEl) return null;

  return ReactDOM.createPortal(children, modalRootEl);
};
export default ModalPortal;
