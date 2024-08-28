import { ITextInput } from "../types";
import {
  confirmPasswordMatch,
  passwordMax,
  passwordMin,
  required,
} from "../validation/errText";
import * as yup from "yup";

export const fieldPassword = (args: ITextInput) => {
  const { label_text, modifier } = args;
  return {
    label_text,
    type: "password",
    name: "password",
    autoComplete: "off",
    validation_type: "string",
    modifier,
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "min",
        params: [8, passwordMin],
      },
      {
        type: "max",
        params: [14, passwordMax],
      },
    ],
  };
};

export const fieldConfirmPassword = (args: ITextInput) => {
  const { label_text, modifier } = args;
  return {
    label_text,
    type: "password",
    name: "confirm_password",
    autoComplete: "off",
    modifier,
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "oneOf",
        params: [[yup.ref("password")], confirmPasswordMatch],
      },
    ],
  };
};
