import clsx from "clsx";
import { FC } from "react";
import style from "../Form.module.scss";
import { ITextInput } from "../types";
import { Field } from "formik";

const Label: FC<ITextInput> = ({ ...props }) => {
  const { modifier, label_text, id, children, ...input_props } = props;

  return (
    <label
      className={clsx(style.label, modifier && style[`label--${modifier}`])}
      htmlFor={id}
    >
      {label_text && (
        <span
          className={clsx(
            style.label__text,
            modifier && style[`label__text--${modifier}`],
          )}
        >
          {label_text}
        </span>
      )}

      <Field
        className={clsx(style.input, modifier && style[`input--${modifier}`])}
        id={id}
        {...input_props}
      />

      {children}
    </label>
  );
};
export default Label;
