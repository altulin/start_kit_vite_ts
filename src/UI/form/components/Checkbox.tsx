import { FC } from "react";
import clsx from "clsx";
import style from "../Form.module.scss";
import IconRule from "@/images/svg/rule.svg?react";
import TextInput, { ITextInput } from "./TextInput";
import { useField } from "formik";

const Checkbox: FC<ITextInput> = ({ children, ...props }) => {
  const [meta] = useField(props.name || "");

  return (
    <TextInput {...props}>
      <div className={clsx(style.checkbox)}>
        <span className={clsx(style.checkbox__icon)}>
          {meta.value && <IconRule />}
        </span>
        <span className={clsx(style.checkbox__text)}>
          <span>Я даю свое согласие на </span>
          {children}
        </span>
      </div>
    </TextInput>
  );
};
export default Checkbox;
