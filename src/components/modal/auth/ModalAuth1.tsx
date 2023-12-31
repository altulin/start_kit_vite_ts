import { useRenderCount } from "@uidotdev/usehooks";
import Modal from "../template/Modal";
import style from "../template/Modal.module.scss";
import clsx from "clsx";
import { FC } from "react";
interface IModalOpen {
  open: boolean;
}

const ModalAuth1: FC<IModalOpen> = ({ open }) => {
  console.log("useRenderCount auth: " + useRenderCount());
  return (
    <Modal open={open}>
      <div className={clsx(style.modal__form)}>
        <h2 className={clsx(style.modal__title)}>Требуется авторизация</h2>
        <button
          className={clsx(style.modal__button, "form__button")}
          onClick={() => {
            // dispatch(stepTo({ type: "auth", step: 2 }));
          }}
        >
          войти
        </button>
      </div>
    </Modal>
  );
};
export default ModalAuth1;
