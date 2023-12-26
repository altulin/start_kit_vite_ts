import clsx from "clsx";
import style from "./Promo.module.scss";
import { FC } from "react";
import FormExample from "@/UI/mui/form/FormExample";

const Promo: FC = () => {
  return (
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner, "container")}>
        <h1>321321321</h1>
        <FormExample />
      </div>
    </section>
  );
};
export default Promo;
