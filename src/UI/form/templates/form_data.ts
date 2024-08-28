import { fieldCheckbox } from "../form_data/checkbox";
import { fieldEmail } from "../form_data/email";
import { fieldName } from "../form_data/name";
import { fieldConfirmPassword, fieldPassword } from "../form_data/password";
import { fieldPhone } from "../form_data/phone";
import { fieldSelect } from "../form_data/select";
import { ITextInput } from "../types";

export const formData: ITextInput[] = [
  fieldName("name"),
  fieldEmail("email"),
  fieldPassword("password"),
  fieldConfirmPassword("повторите пароль"),
  fieldCheckbox("правило", "rule"),
  fieldPhone("телефон"),
  fieldSelect("город", "test"),
];
