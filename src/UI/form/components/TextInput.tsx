import { FC, InputHTMLAttributes, useId } from "react";
import Container from "../hoc/Container";
import { Field } from "formik";
import clsx from "clsx";
import style from "../Form.module.scss";

export interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
  label_text: string;
  children?: React.ReactNode;
  type?: string;
}

const TextInput: FC<ITextInput> = ({
  type = "text",
  label_text,
  children,
  ...props
}) => {
  const id = useId();

  return (
    <Container label_text={label_text} id={id} {...props}>
      <>
        <Field className={clsx(style.input)} type={type} id={id} {...props} />
        {children}
      </>
    </Container>
  );
};
export default TextInput;
