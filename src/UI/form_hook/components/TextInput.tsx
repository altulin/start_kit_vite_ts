import { FC, useId } from "react";
import Container from "../hoc/Container";
import { ITextInput } from "../utils/types";
import Label from "../hoc/Label";
import Input from "./Input";

const TextInput: FC<ITextInput> = ({ children, ...props }) => {
  const id = useId();

  return (
    <Container {...props}>
      <Label {...props} id={id}>
        <Input {...props} id={id} />
        {children}
      </Label>
    </Container>
  );
};
export default TextInput;
