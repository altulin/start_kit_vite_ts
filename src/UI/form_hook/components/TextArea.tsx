/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { FC } from "react";
import style from "../Form.module.scss";
import { ITextInput } from "../utils/types";
import TextareaAutosize from "react-textarea-autosize";
import useGetFieldData from "../hook/fieldData";
import { useController } from "react-hook-form";

const TextArea: FC<ITextInput> = ({ ...props }) => {
  const { name, modifier, minRows } = props;
  const { isError } = useGetFieldData(props.name);
  const { field } = useController({ name });
  const { onChange, value, onBlur } = field;

  return (
    <TextareaAutosize
      className={clsx(
        style.textarea,
        modifier && style[`textarea--${modifier}`],
        isError && style["textarea--error"],
      )}
      name={name}
      onBlur={onBlur}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      placeholder={props.placeholder}
      minRows={minRows}
    />
  );
};
export default TextArea;
