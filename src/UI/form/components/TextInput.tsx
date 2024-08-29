import { FC, useId } from "react";
import Container from "../hoc/Container";
import { ITextInput } from "../types";
import Label from "../hoc/Label";
import FieldBasic from "../hoc/FieldBasic";

const TextInput: FC<ITextInput> = ({
  label_text,
  radio_list,
  children,
  ...props
}) => {
  const id = useId();

  return (
    <Container {...props}>
      {!radio_list && (
        <Label {...props} label_text={label_text} id={id}>
          <FieldBasic {...props} id={id} />
          {children}
        </Label>
      )}
    </Container>
  );
};
export default TextInput;
