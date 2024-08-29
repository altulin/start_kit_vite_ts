import clsx from "clsx";
import { Field } from "formik";
import { FC } from "react";
import style from "../Form.module.scss";
import { ITextInput } from "../types";

const FieldBasic: FC<ITextInput> = ({ id, ...props }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { validation_type, validations, type, ...input_props } = props;

  return (
    <Field
      className={clsx(
        style.input,
        input_props.modifier && style[`input--${input_props.modifier}`],
      )}
      type={type}
      id={id}
      {...input_props}
    />
  );
};
export default FieldBasic;
