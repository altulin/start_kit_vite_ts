/* eslint-disable no-useless-escape */
import { onPhoneInput } from "../masks/phone";
import { required, valid } from "../validation/errText";

export const fieldPhone = (label: string, modifier?: string) => {
  return {
    label_text: label,
    type: "tel",
    name: "phone",
    onInput: onPhoneInput,
    validation_type: "string",
    modifier,
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "matches",
        params: [/^(\+7|8) \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/gm, valid],
      },
    ],
  };
};
