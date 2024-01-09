import style from "./Modal.module.scss";
import clsx from "clsx";
import ModalPortal from "../ModalPortal";
import Icon from "@/images/svg/menuClose.svg?react";
import { clearAllStep } from "@/store/appSlice";
import { useClickAway } from "@uidotdev/usehooks";
import useLockBodyScroll from "@/hooks/lockBodyScroll";
import { FC, ReactNode, RefObject } from "react";
import { useAppDispatch } from "@/hooks/hook";

interface IModal {
  children: ReactNode;
  open: boolean;
}

const Modal: FC<IModal> = ({ children, open = false }) => {
  const dispatch = useAppDispatch();

  useLockBodyScroll(open);

  const ref = useClickAway(() => {
    dispatch(clearAllStep());
  });

  return (
    <ModalPortal open={open}>
      <div className={clsx(style.modal)}>
        <div
          ref={ref as RefObject<HTMLDivElement>}
          className={clsx(style.modal__inner)}
        >
          <button
            className={clsx(style.modal__close)}
            onClick={() => dispatch(clearAllStep())}
          >
            <Icon />
          </button>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};
export default Modal;
