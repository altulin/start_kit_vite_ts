import { ITextInput } from "../types";
import { requiredCheck } from "../validation/errText";

export const fieldRadio = (args: ITextInput) => {
  const { name = "vote", modifier, radio_list } = args;

  return {
    type: "radio",
    name,
    modifier,
    validation_type: "boolean",
    radio_list,
    validations: [
      {
        type: "oneOf",
        params: [[true], requiredCheck],
      },
    ],
  };
};
