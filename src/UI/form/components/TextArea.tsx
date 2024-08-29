/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { FC } from "react";
import style from "../Form.module.scss";
import { FieldProps, useField } from "formik";
import { ITextInput } from "../types";
import TextareaAutosize from "react-textarea-autosize";

interface IMyTextArea extends FieldProps, Omit<ITextInput, "form"> {}

const TextArea: FC<IMyTextArea> = ({ ...props }) => {
  const {
    field: { name },
    modifier,
  } = props;
  const [meta, field, helpers] = useField(name);

  return (
    <TextareaAutosize
      className={clsx(
        style.textarea,
        modifier && style[`textarea--${modifier}`],
      )}
      name={name}
      onBlur={() => helpers.setTouched(true)}
      onChange={(e: any) => helpers.setValue(e.target.value)}
      value={field.value}
      placeholder="Все"
    />
  );
};
export default TextArea;
