import { fieldCheckbox } from "../form_data/checkbox";
import { fieldEmail } from "../form_data/email";
import { fieldName } from "../form_data/name";
import { fieldConfirmPassword, fieldPassword } from "../form_data/password";
import { IField } from "../types";

export const formData: IField[] = [
  fieldName("name"),
  fieldEmail("email"),
  fieldPassword("password"),
  fieldConfirmPassword("повторите пароль"),
  fieldCheckbox("правило", "rule"),
];
