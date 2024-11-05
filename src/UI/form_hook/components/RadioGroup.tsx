import { FC, useId } from "react";
import { ITextInput } from "../utils/types";
import Label from "../hoc/Label";
import clsx from "clsx";
import style from "../Form.module.scss";
import Input from "./Input";

const RadioGroup: FC<ITextInput> = ({ radio_list, children, ...props }) => {
  const id = useId();

  return (
    <>
      {radio_list &&
        radio_list.map((item, i) => (
          <Label
            {...props}
            key={i}
            label_text={item.label}
            id={`${id}_${i}`}
            value={item.value}
          >
            <span className={clsx(style.radio__mark)}></span>
            <Input {...props} id={`${id}_${i}`} value={item.value} />
            {children}
          </Label>
        ))}
    </>
  );
};
export default RadioGroup;
