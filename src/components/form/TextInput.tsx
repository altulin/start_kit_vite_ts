import { Field, useField } from "formik";
import { ChangeEvent, FC, useId } from "react";
import Container from "./Container";
import style from "./Form.module.scss";
import clsx from "clsx";

interface IMyTextInput {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  id?: string;
  modifier?: string;
  onInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  as?: string;
  children?: JSX.Element;
}

const TextInput: FC<IMyTextInput> = ({ label, children, ...props }) => {
  const [field, meta] = useField(props);
  const id = useId();

  return (
    <Container {...props}>
      <label
        className={clsx(style.label, style[`label--${props.modifier}`] || "")}
        htmlFor={props.id || id}
      >
        {label ? (
          <span className={clsx(style.label__text)}>{label}</span>
        ) : null}

        <Field
          {...field}
          {...props}
          className={clsx(style.input, style[`input--${props.modifier}`] || "")}
          id={props.id || id}
        />
        {children}
      </label>

      {meta.touched && meta.error ? (
        <div
          className={clsx(style.error, style[`error--${props.modifier}`] || "")}
        >
          {meta.error}
        </div>
      ) : null}
    </Container>
  );
};

export default TextInput;
