import { FC, InputHTMLAttributes, useId } from "react";
import Container from "../hoc/Container";
import { Field, useField } from "formik";
import clsx from "clsx";
import style from "../Form.module.scss";

export interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
  label_text: string;
}

const TextInput: FC<ITextInput> = ({ type = "text", label_text, ...props }) => {
  const id = useId();
  const [field] = useField(props.name || "");

  return (
    <Container label_text={label_text} id={id} {...props}>
      <>
        <Field
          className={clsx(style.input)}
          type={type}
          id={id}
          {...props}
          value={field.value}
        />
        {props.children}
      </>
    </Container>
  );
};
export default TextInput;
