/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { FC } from "react";
import style from "../Form.module.scss";
import { FieldProps, useField } from "formik";
import { ITextInput } from "../types";
import TextInput from "./TextInput";
interface IMyTextArea extends FieldProps, Omit<ITextInput, "form"> {}

const File: FC<any> = ({ ...props }) => {
  const {
    field: { name },
    modifier,
  } = props;
  const [meta, field, helpers] = useField(name);

  return (
    <input
      name={name}
      type="file"
      className={clsx(
        style.file__input,
        modifier && style[`file__input--${modifier}`],
      )}
      onBlur={() => helpers.setTouched(true)}
      onChange={(e: any) => helpers.setValue(e.target.files[0])}
    />
  );
};
export default File;
