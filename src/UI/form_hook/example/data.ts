import { fieldCheckbox } from "../utils/options/checkbox";
import { fieldDatePicker } from "../utils/options/datepicker";
import { fieldEmail } from "../utils/options/email";
import { fieldFile } from "../utils/options/file";
import { fieldName } from "../utils/options/name";
import { fieldConfirmPassword, fieldPassword } from "../utils/options/password";
import { fieldPhone } from "../utils/options/phone";
import { fieldRadio } from "../utils/options/radio";
import { fieldSelect } from "../utils/options/select";
import { fieldTextArea } from "../utils/options/textarea";
import { ITextInput } from "../utils/types";

import store from "@/store";
import { user } from "@/store/rtk/user/userApi";

const promise = store.dispatch(user.endpoints.getUsers.initiate({}));
const { data } = await promise;

export const radio_list = [
  { label: "Тест_1", value: "test_1" },
  { label: "Тест_2", value: "test_2" },
  { label: "Тест_3", value: "test_3" },
];

export const formData: ITextInput[] = [
  fieldName({ label_text: "name", name: "name", placeholder: "Enter name" }),

  fieldEmail({ label_text: "email", name: "email" }),

  fieldPassword({ label_text: "password", name: "password" }),

  fieldConfirmPassword({
    label_text: "повторите пароль",
    name: "confirm_password",
  }),

  fieldCheckbox({
    label_text: "правило",
    name: "rule",
    checked: true,
    modifier: "checkbox",
  }),

  fieldPhone({ label_text: "телефон", name: "phone" }),

  fieldSelect({
    name: "city",
    label_text: "город",
    options: data || [],
    modifier: "test",
    placeholder: "Выберите город ...",
  }),

  fieldTextArea({
    label_text: "текст",
    name: "textarea",
    placeholder: "Enter text",
    minRows: 4,
  }),

  fieldFile({
    label_text: "файл",
    name: "file",
    placeholder: "Enter file",
    modifier: "test",
    accept: ".png, .jpg, .jpeg",
    multiple: true,
  }),

  fieldRadio({
    name: "radio",
    radio_list,
    init_value: radio_list[0],
    modifier: "radio",
  }),

  fieldDatePicker({
    label_text: "Дата рождения",
    name: "date",
    placeholder: "Enter date",
  }),
];
