import { userApi } from "@/store/rtk/user/userApi";
import { fieldCheckbox } from "../form_data/checkbox";
import { fieldEmail } from "../form_data/email";
import { fieldFile } from "../form_data/file";
import { fieldName } from "../form_data/name";
import { fieldConfirmPassword, fieldPassword } from "../form_data/password";
import { fieldPhone } from "../form_data/phone";
import { fieldRadio } from "../form_data/radio";
import { fieldSelect } from "../form_data/select";
import { fieldTextArea } from "../form_data/textarea";
import { ITextInput } from "../types";
import store from "@/store";

const promise = store.dispatch(userApi.endpoints.getUsers.initiate(undefined));
const { data } = await promise;
// promise.unsubscribe();

// const options = [
//   { label: "Тест_1", value: "test_1" },
//   { label: "Тест_2", value: "test_2" },
//   { label: "Тест_3", value: "test_3" },
// ];

export const radio_list = [
  { label: "Тест_1", value: "test_1" },
  { label: "Тест_2", value: "test_2" },
  { label: "Тест_3", value: "test_3" },
];

export const formData: ITextInput[] = [
  fieldName({ label_text: "name" }),
  fieldEmail({ label_text: "email" }),
  fieldPassword({ label_text: "password" }),
  fieldConfirmPassword({ label_text: "повторите пароль" }),
  fieldCheckbox({ label_text: "правило", name: "rule" }),
  fieldPhone({ label_text: "телефон" }),
  fieldSelect({
    label_text: "город",
    options: data || [],
    modifier: "test",
    placeholder: "Выберите город ...",
  }),
  fieldTextArea({ label_text: "текст", modifier: "test" }),
  fieldFile({ label_text: "файл", modifier: "test" }),
  fieldRadio({ name: "radio", radio_list }),
];
