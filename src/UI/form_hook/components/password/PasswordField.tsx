import { FC, useState } from "react";
import ButtonEye from "./ButtonEye";
import { ITextInput } from "../../utils/types";
import Input from "../Input";

const PasswordField: FC<ITextInput> = ({ ...props }) => {
  const [isTypeText, setType] = useState(false);

  return (
    <>
      <Input {...props} type={isTypeText ? "text" : "password"} />
      <ButtonEye isTypeText={isTypeText} setType={setType} />
    </>
  );
};
export default PasswordField;
