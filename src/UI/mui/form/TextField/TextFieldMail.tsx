import { FC } from "react";
import TextFieldTemplate from "./TextFieldTemplate";
import { ITextField } from "./types";

const TextFieldMail: FC<ITextField> = ({ formik }) => {
  return (
    <TextFieldTemplate
      formik={formik}
      label="mail"
      placeholder="example@mail.ru"
      name="mail"
    />
  );
};

export default TextFieldMail;
