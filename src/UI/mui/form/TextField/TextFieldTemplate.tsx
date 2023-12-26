import { Input, TextField } from "@mui/material";
import { IInitialValues } from "../initialValues";
import { FormikProps } from "formik";
import { ComponentProps, FC } from "react";
import clsx from "clsx";
import style from "./TextField.module.scss";

export interface ITextFieldTemplate {
  placeholder?: string;
  name: string;
  label: string;
  formik: FormikProps<IInitialValues>;
  handleInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
  type?: string;
  InputProps?: ComponentProps<typeof Input>;
}

const TextFieldTemplate: FC<ITextFieldTemplate> = ({
  placeholder,
  name,
  label,
  formik,
  handleInput,
  handleKeyDown,
  type = "text",
  InputProps,
}) => {
  return (
    <TextField
      type={type}
      label={label}
      name={name}
      value={formik.values[`${name}`]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      helperText={formik.errors[`${name}`]}
      autoComplete="off"
      className={clsx(style.field, style["field--custom"])}
      inputProps={{
        className: clsx(
          style.field__input,
          style["field__input--custom"],
          style["field__input--placeholder"],
        ),
      }}
      InputProps={InputProps}
      InputLabelProps={{
        className: clsx(style.field__label, style["field__label--custom"]),
      }}
      FormHelperTextProps={{ className: style.field__helper }}
      placeholder={placeholder}
      error={formik.errors[`${name}`] !== undefined}
    />
  );
};

export default TextFieldTemplate;
