/* eslint-disable no-useless-escape */
import { onPhoneInput } from "../masks/phone";
import { ITextInput } from "../types";
import { required, valid } from "../validation/errText";

export const fieldPhone = (args: ITextInput) => {
  const { label_text, modifier, name = "phone", placeholder } = args;

  return {
    label_text,
    type: "tel",
    name,
    onInput: onPhoneInput,
    placeholder,
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
