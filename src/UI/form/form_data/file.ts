import File from "../components/File";
import { ITextInput } from "../types";
import { required } from "../validation/errText";

export const fieldFile = (args: ITextInput) => {
  const { label_text, modifier, name = "file" } = args;
  return {
    label_text,
    type: "file",
    name,
    validation_type: "string",
    modifier,
    component: File,
    validations: [
      {
        type: "required",
        params: [required],
      },
    ],
  };
};
