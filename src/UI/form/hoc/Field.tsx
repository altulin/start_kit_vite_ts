import { FC } from "react";
import TextInput, { ITextInput } from "../components/TextInput";
import PasswordField from "../components/password/PasswordField";
import Checkbox from "../components/Checkbox";

const FieldComponent: FC<ITextInput> = ({ ...props }) => {
  const getComponent = (type: string | undefined) => {
    switch (type) {
      case "text":
        return <TextInput {...props} />;

      case "email":
        return <TextInput {...props} />;

      case "password":
        return <PasswordField {...props} />;

      case "checkbox":
        return <Checkbox {...props} />;
    }
  };
  return getComponent(props.type);
};
export default FieldComponent;
