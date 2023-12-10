import clsx from "clsx";
import style from "./Promo.module.scss";
import Form from "@/UI/form/example/Form";
import { FC } from "react";

const Promo: FC = () => {
  return (
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner, "container")}>
        <h1>321321321</h1>
        <Form />
      </div>
    </section>
  );
};
export default Promo;
