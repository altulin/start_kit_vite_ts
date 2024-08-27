import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";
import style from "../Form.module.scss";
import useCheckError from "../hook/checkError";
import { useField } from "formik";

interface IContainer extends InputHTMLAttributes<HTMLInputElement> {
  label_text: string;
  modifier?: string | null;
}

const Container: FC<IContainer> = ({ ...props }) => {
  const { id, children, label_text, name = "", modifier = null } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [meta, fields] = useField(name);
  const { isError, error_text } = useCheckError(fields);

  return (
    <div
      className={clsx(
        style.container,
        modifier && style["container--${modifier}"],
      )}
    >
      <label
        className={clsx(style.label, modifier && style[`label--${modifier}`])}
        htmlFor={id}
      >
        <span
          className={clsx(
            style.label__text,
            modifier && style[`label__text--${modifier}`],
          )}
        >
          {label_text}
        </span>
        {children}
      </label>

      {isError && (
        <div
          className={clsx(style.error, modifier && style[`error--${modifier}`])}
        >
          <span
            className={clsx(
              style.error__text,
              modifier && style[`error__text--${modifier}`],
            )}
          >
            {error_text}
          </span>
        </div>
      )}
    </div>
  );
};
export default Container;
