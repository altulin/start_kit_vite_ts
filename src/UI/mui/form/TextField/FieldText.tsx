import { FC } from "react";
import TextFieldTemplate from "./TextFieldTemplate";
import { onNameInput } from "@/UI/form/input/js/masks/name";
import { ITextField } from "./types";

const FieldText: FC<ITextField> = ({ formik }) => {
  return (
    <TextFieldTemplate
      formik={formik}
      label="имя"
      placeholder="Ваше имя"
      name="name"
      handleInput={onNameInput}
    />
  );
};

export default FieldText;
