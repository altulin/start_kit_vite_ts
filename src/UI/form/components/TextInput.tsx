/* eslint-disable @typescript-eslint/no-unused-vars */
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
  ...props
}) => {
  const id = useId();

  const { validation_type, validations, ...input_props } = props;

  return (
    <Container label_text={label_text} id={id} {...props}>
      <>
        <Field
          className={clsx(
            style.input,
            input_props.modifier && style[`input--${input_props.modifier}`],
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
