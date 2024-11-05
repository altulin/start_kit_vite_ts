import { FC, useId } from "react";
import { ITextInput } from "../utils/types";
import Container from "../hoc/Container";
import Label from "../hoc/Label";
import { Controller, useFormContext } from "react-hook-form";
import Input from "./Input";

const Field: FC<ITextInput> = ({ component: Component, ...props }) => {
  const id = useId();
  const methods = useFormContext();
  props.id = id;

  if (Component !== undefined && Component.name === "RadioGroup") {
    return (
      <Container {...props}>
        <Component {...props} />
      </Container>
    );
  }

  return (
    <Container {...props}>
      <Label {...props} id={id}>
        <Controller
          control={methods.control}
          name={props.name}
          render={() => {
            return Component === undefined ? (
              <Input {...props} />
            ) : (
              <Component {...props} />
            );
          }}
        ></Controller>
      </Label>
    </Container>
  );
};
export default Field;
