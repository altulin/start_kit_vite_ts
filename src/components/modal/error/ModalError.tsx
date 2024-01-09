import { FC } from "react";
import Modal from "../template/Modal";
import style from "../template/Modal.module.scss";
import clsx from "clsx";
import { useAppSelector } from "@/hooks/hook";
import { useRenderCount } from "@uidotdev/usehooks";

interface IModalOpen {
  open: boolean;
}

const ModalError: FC<IModalOpen> = ({ open }) => {
  const { modalState } = useAppSelector((state) => state.app);

  console.log("useRenderCount err: " + useRenderCount());

  return (
    <Modal open={open}>
      <div className={clsx(style.modal__form)}>
        <div className={clsx(style["modal-form__wrap"])}>
          <h2 className={clsx(style.modal__title, style["modal__title--succ"])}>
            {modalState?.error?.text}
          </h2>
        </div>
      </div>
    </Modal>
  );
};
export default ModalError;
