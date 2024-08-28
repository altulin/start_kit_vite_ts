/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { FC } from "react";
import style from "../Form.module.scss";
import Select from "react-select";
import { useField } from "formik";
// import { FieldProps } from "formik";
// import { OptionsType } from "../types";

// interface IMySelect extends FieldProps {
// options: OptionsType;
// }

const MySelect: FC<any> = ({ ...props }) => {
  const {
    field: { name },
    options,
  } = props;

  const [meta, field, helpers] = useField(name);

  console.log(helpers);

  return (
    <Select
      options={options}
      placeholder="Все"
      className={clsx(style.select)}
      classNames={{
        control: () => clsx(style.select__control),
        valueContainer: () => clsx(style.select__valueContainer),
        placeholder: () => clsx(style.select__placeholder),
        indicatorsContainer: () => clsx(style.select__indicatorsContainer),
        indicatorSeparator: () => clsx(style.select__indicatorSeparator),
        menuList: () => clsx(style.select__menuList),
      }}
      name={name}
      onBlur={() => helpers.setTouched(true)}
      onChange={(val: any) => helpers.setValue(val.value)}
      value={options.find((el: any) => el.value === field.value)}
    />
  );
};
export default MySelect;

{
  /*  */
}
