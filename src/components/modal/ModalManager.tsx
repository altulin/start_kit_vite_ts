import ModalAuth1 from "./auth/ModalAuth1";
import useGetCurrentModal from "@/hooks/getCurrentModal";
import { useAppSelector } from "@/hooks/hook";
import { RefObject, createContext, useEffect, useRef, useState } from "react";

export const ModalProvider = createContext<any>(null);

const ModalManager = () => {
  const { modalState } = useAppSelector((state) => state.app);
  const modal = useGetCurrentModal(modalState);

  const refModalRoot = useRef<any>(null);

  const [modalRootEl, setModalRootEl] = useState<any>(null);

  useEffect(() => {
    setModalRootEl(refModalRoot);
  }, []);

  return (
    <ModalProvider.Provider value={modalRootEl}>
      <div ref={refModalRoot} id="modal-root"></div>

      <ModalAuth1 open={modal === "auth-1"} />
    </ModalProvider.Provider>
  );
};

export default ModalManager;
