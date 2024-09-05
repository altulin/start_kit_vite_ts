import TextArea from "../components/TextArea";
import { ITextInput } from "../types";
import { required } from "../validation/errText";

export const fieldTextArea = (args: ITextInput) => {
  const {
    label_text,
    modifier,
    name = "textarea",
    placeholder,
    minRows,
  } = args;
  return {
    label_text,
    type: "textarea",
    name,
    minRows,
    validation_type: "string",
    modifier,
    placeholder,
    component: TextArea,
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "max",
        params: [50, "Не более 50 символов"],
      },
    ],
  };
};
