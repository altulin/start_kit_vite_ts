import { useAppSelector } from "@/hooks/hook";
import ModalAuth1 from "./auth/ModalAuth1";
import ModalError from "./error/ModalError";
import useGetCurrentModal from "@/hooks/getCurrentModal";

const ModalManager = () => {
  const { modalState } = useAppSelector((state) => state.app);
  const modal = useGetCurrentModal(modalState);

  if (!modalState) return null;

  return (
    <>
      {modal === "auth-1" && <ModalAuth1 open={true} />};
      {modal === "error" && <ModalError open={true} />}
    </>
  );
};

export default ModalManager;
