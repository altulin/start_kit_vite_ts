import clsx from "clsx";
import { FC } from "react";
import style from "../Form.module.scss";
import { ITextInput } from "../types";

const Label: FC<ITextInput> = ({ ...props }) => {
  const { modifier, label_text, id, children } = props;

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
      {children}
    </label>
  );
};
export default Label;
