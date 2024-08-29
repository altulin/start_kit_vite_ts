import TextArea from "../components/TextArea";
import { ITextInput } from "../types";
import { required } from "../validation/errText";

export const fieldTextArea = (args: ITextInput) => {
  const { label_text, modifier, name = "textarea" } = args;
  return {
    label_text,
    type: "textarea",
    name,
    validation_type: "string",
    modifier,
    component: TextArea,
    validations: [
      {
        type: "required",
        params: [required],
      },
    ],
  };
};
