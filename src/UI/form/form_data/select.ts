/* eslint-disable no-useless-escape */

import MySelect from "../components/Select";
import { ITextInput } from "../types";
import { required } from "../validation/errText";

export const fieldSelect = (args: ITextInput) => {
  const { label_text, modifier, options, name = "select" } = args;
  return {
    label_text,
    type: "select",
    name,
    validation_type: "string",
    modifier,
    component: MySelect,
    options,
    validations: [
      {
        type: "required",
        params: [required],
      },
    ],
  };
};
