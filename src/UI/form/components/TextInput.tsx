import { FC, useId } from "react";
import Container from "../hoc/Container";
import { Field } from "formik";
import clsx from "clsx";
import style from "../Form.module.scss";
import { ITextInput } from "../types";

const TextInput: FC<ITextInput> = ({
  type = "text",
  label_text,
  children,
  modifier = null,
  ...props
}) => {
  const id = useId();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { validation_type, validations, ...input_props } = props;

  return (
    <Container label_text={label_text} id={id} {...props}>
      <>
        <Field
          className={clsx(
            style.input,
            modifier && style[`input--${modifier}`],
            type === "checkbox" && style["input--checkbox"],
          )}
          type={type}
          id={id}
          {...input_props}
        />
        {children}
      </>
    </Container>
  );
};
export default TextInput;
