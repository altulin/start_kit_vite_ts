import { onNameInput } from "../masks/name";
import { IField } from "../types";

export const fields: IField[] = [
  {
    label_text: "First name",
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
  },
];
