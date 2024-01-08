import ModalAuth1 from "./auth/ModalAuth1";
import useGetCurrentModal from "@/hooks/getCurrentModal";
import { useAppSelector } from "@/hooks/hook";
import { useRenderCount } from "@uidotdev/usehooks";
import { createContext, useEffect, useRef, useState } from "react";

export const ModalProvider = createContext<HTMLDivElement | null>(null);

const ModalManager = () => {
  const { modalState } = useAppSelector((state) => state.app);
  const modal = useGetCurrentModal(modalState);

  const refModalRoot = useRef<HTMLDivElement | null>(null);

  const [modalRootEl, setModalRootEl] = useState<HTMLDivElement | null>(null);

  console.log("useRenderCount : ModalManager " + useRenderCount());

  useEffect(() => {
    setModalRootEl(refModalRoot.current);
  }, []);

  return (
    <ModalProvider.Provider value={modalRootEl}>
      <div ref={refModalRoot} id="modal-root"></div>

      <ModalAuth1 open={modal === "auth-1"} />
    </ModalProvider.Provider>
  );
};

export default ModalManager;
