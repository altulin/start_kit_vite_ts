import { onNameInput } from "../masks/name";
import { IField } from "../types";

export const fields: IField[] = [
  {
    label_text: "First name",
    type: "text",
    name: "name",
    onInput: onNameInput,
    required: true,
  },
  {
    label_text: "email",
    type: "email",
    name: "email",
    required: true,
  },
  {
    label_text: "password",
    type: "password",
    name: "password",
    required: true,
    autoComplete: "off",
  },
  {
    label_text: "confirm_password",
    type: "password",
    name: "confirm_password",
    required: true,
    autoComplete: "off",
  },
  {
    label_text: "правило",
    type: "checkbox",
    name: "rule",
    required: true,
  },
];
