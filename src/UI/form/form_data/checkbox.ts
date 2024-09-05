import { ITextInput } from "../types";
import { required, requiredCheck } from "../validation/errText";

export const fieldCheckbox = (args: ITextInput) => {
  const { label_text, name = "checkbox", modifier, children } = args;

  return {
    label_text,
    type: "checkbox",
    name,
    modifier,
    validation_type: "boolean",
    children,
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "oneOf",
        params: [[true], requiredCheck],
      },
    ],
  };
};
