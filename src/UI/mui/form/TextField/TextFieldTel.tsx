import { FC } from "react";
import TextFieldTemplate from "./TextFieldTemplate";
import { onPhoneInput, onPhoneKeyDown } from "@/UI/form/input/js/masks/phone";
import { ITextField } from "./types";

const TextFieldTel: FC<ITextField> = ({ formik }) => {
  return (
    <TextFieldTemplate
      formik={formik}
      label="телефон"
      name="phone"
      type="tel"
      placeholder={"+7 (___) __ ______"}
      handleInput={onPhoneInput}
      handleKeyDown={onPhoneKeyDown}
    />
  );
};

export default TextFieldTel;
