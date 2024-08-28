import { ITextInput } from "../types";
import { required, valid } from "../validation/errText";

export const fieldEmail = (args: ITextInput) => {
  const { label_text, modifier } = args;
  return {
    label_text,
    type: "email",
    name: "email",
    validation_type: "string",
    modifier,
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "matches",
        params: [/@[^.]*\./, valid],
      },
      {
        type: "email",
        params: [valid],
      },
    ],
  };
};
