import { onNameInput } from "../masks/name";
import { ITextInput } from "../types";
import { nameMax, nameMin, required } from "../validation/errText";

export const fieldName = (args: ITextInput) => {
  const { label_text, modifier, name = "name" } = args;
  return {
    label_text,
    type: "text",
    name,
    onInput: onNameInput,
    validation_type: "string",
    modifier,
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "min",
        params: [2, nameMin],
      },
      {
        type: "max",
        params: [50, nameMax],
      },
    ],
  };
};
