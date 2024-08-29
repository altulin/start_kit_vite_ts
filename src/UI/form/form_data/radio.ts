import { ITextInput } from "../types";

export const fieldRadio = (args: ITextInput) => {
  const { name = "vote", modifier, radio_list } = args;

  return {
    type: "radio",
    name,
    modifier,
    validation_type: "string",
    radio_list,
    validations: [],
  };
};
