import { onNameInput } from "../masks/name";
import { nameMax, nameMin, required } from "../validation/errText";

export const fieldName = (label: string, modifier?: string) => {
  return {
    label_text: label,
    type: "text",
    name: "name",
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
