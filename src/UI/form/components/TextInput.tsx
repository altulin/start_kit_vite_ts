import { FC, useId } from "react";
import Container from "../hoc/Container";
import { ITextInput } from "../types";
import Label from "../hoc/Label";
import FieldBasic from "../hoc/FieldBasic";
import clsx from "clsx";
import style from "../Form.module.scss";

const TextInput: FC<ITextInput> = ({
  label_text,
  radio_list,
  children,
  ...props
}) => {
  const id = useId();

  return (
    <Container label_text={label_text} id={id} {...props}>
      {!radio_list && (
        <Label {...props} label_text={label_text} id={id}>
          <FieldBasic {...props} id={id} />
          {children}
        </Label>
      )}

      {radio_list &&
        radio_list.map((item, i) => (
          <Label {...props} key={i} label_text={item.label} id={`${id}_${i}`}>
            <FieldBasic {...props} value={item.value} id={`${id}_${i}`} />
            <span className={clsx(style.radio__mark)}></span>
            {children}
          </Label>
        ))}
    </Container>
  );
};
export default TextInput;
