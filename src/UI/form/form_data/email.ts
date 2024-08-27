import { required, valid } from "../validation/errText";

export const fieldEmail = (label: string, modifier?: string) => {
  return {
    label_text: label,
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
