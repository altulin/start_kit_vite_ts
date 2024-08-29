import { FC } from "react";
import TextInput from "../components/TextInput";
import PasswordField from "../components/password/PasswordField";
import Checkbox from "../components/Checkbox";
import { ITextInput } from "../types";

const FieldComponent: FC<ITextInput> = ({ ...props }) => {
  const { type = "text" } = props;

  const getComponent = (type: string) => {
    const simple = ["text", "email", "tel", "select", "textarea", "file"];

    switch (true) {
      case simple.includes(type):
        return <TextInput {...props} />;

      case type === "password":
        return <PasswordField {...props} />;

      case type === "checkbox":
        return <Checkbox {...props} />;
    }
  };
  return getComponent(type);
};
export default FieldComponent;
