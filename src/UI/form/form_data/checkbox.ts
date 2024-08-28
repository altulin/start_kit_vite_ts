import { ITextInput } from "../types";
import { requiredCheck } from "../validation/errText";

export const fieldCheckbox = (args: ITextInput) => {
  const { label_text, name, modifier } = args;

  return {
    label_text,
    type: "checkbox",
    name,
    modifier,
    validation_type: "boolean",
    validations: [
      {
        type: "oneOf",
        params: [[true], requiredCheck],
      },
    ],
  };
};
