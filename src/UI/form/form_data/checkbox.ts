import { requiredCheck } from "../validation/errText";

export const fieldCheckbox = (
  label: string,
  name: string,
  modifier?: string,
) => {
  return {
    label_text: label,
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
