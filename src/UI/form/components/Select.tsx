/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { FC, useEffect } from "react";
import style from "../Form.module.scss";
import Select from "react-select";
import { FieldProps, useField } from "formik";
import { ITextInput } from "../types";
import useCheckError from "../hook/checkError";

interface IMySelect extends FieldProps, Omit<ITextInput, "form"> {}

const MySelect: FC<IMySelect> = ({ ...props }) => {
  const {
    field: { name },
    options,
    placeholder,
  } = props;

  const [meta, field, helpers] = useField(name);
  const { isError } = useCheckError(field);

  return (
    <Select
      options={options}
      placeholder={placeholder}
      className={clsx(style.select)}
      classNames={{
        control: () =>
          clsx(
            style.select__control,
            isError && style["select__control--error"],
          ),
        valueContainer: () => clsx(style.select__valueContainer),
        placeholder: () => clsx(style.select__placeholder),
        indicatorsContainer: () => clsx(style.select__indicatorsContainer),
        indicatorSeparator: () => clsx(style.select__indicatorSeparator),
        menuList: () => clsx(style.select__menuList),
        option: () => clsx(style.select__option),
        singleValue: () => clsx(style.select__singleValue),
        input: () => clsx(style.select__input),
      }}
      name={name}
      onBlur={() => helpers.setTouched(true)}
      onChange={(val: any) => helpers.setValue(val.value)}
      value={options && options.find((el: any) => el.value === field.value)}
    />
  );
};
export default MySelect;

{
  /*  */
}
