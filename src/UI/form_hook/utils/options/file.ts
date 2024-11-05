import File from "../../components/File";
import { ITextInput } from "../types";
import { required } from "../validation/errText";

export const fieldFile = (args: ITextInput) => {
  return {
    type: "file",
    validation_type: "string",

    validations: [
      {
        type: "required",
        params: [required],
      },
    ],

    component: File,
    ...args,
  };
};
