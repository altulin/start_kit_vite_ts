import clsx from "clsx";
import style from "./Promo.module.scss";
import { FC } from "react";
import { useAppDispatch } from "@/hooks/hook";
import { stepTo } from "@/store/modal/modalSlice";
// import { useGetOneUserQuery } from "@/store/user/userApi";

const Promo: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner, "container")}>
        <h1>321321321</h1>
        <button
          onClick={() => {
            dispatch(stepTo({ auth: { step: 1 } }));
          }}
        >
          auth
        </button>
        <button
          onClick={() => {
            dispatch(stepTo({ error: { text: "Ошибка" } }));
          }}
        >
          err
        </button>
      </div>
    </section>
  );
};
export default Promo;
