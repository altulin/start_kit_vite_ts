import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";
import style from "../Form.module.scss";
import useCheckError from "../hook/checkError";
import { useField } from "formik";

interface IContainer extends InputHTMLAttributes<HTMLInputElement> {
  label_text: string;
}

const Container: FC<IContainer> = ({ ...props }) => {
  const { id, children, label_text, name = "" } = props;
  const [meta] = useField(name);
  const { isError, error_text } = useCheckError(meta);

  return (
    <div className={clsx(style.container)}>
      <label className={clsx(style.label)} htmlFor={id}>
        <span className={clsx(style.label__text)}>{label_text}</span>
        {children}
      </label>

      {isError && (
        <div className={clsx(style.error)}>
          <span className={clsx(style.error__text)}>{error_text}</span>
        </div>
      )}
    </div>
  );
};
export default Container;
