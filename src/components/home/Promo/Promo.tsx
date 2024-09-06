/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import FormTemplate from "@/UI/form/templates/FormTemplate";
import clsx from "clsx";
import style from "./Promo.module.scss";
import PressElement from "@/UI/button/PressElement";

const Promo: FC = () => {
  return (
    <div className={clsx(style.promo, "container")}>
      <FormTemplate />
      <PressElement variant_elem="button" label="Отправить" href="dfgdfg" />
    </div>
  );
};

export default Promo;
