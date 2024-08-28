import clsx from "clsx";
import { FC } from "react";
import style from "../Form.module.scss";
import Select from "react-select";
import { FieldProps } from "formik";
import { ITextInput } from "../types";

interface IMySelect extends FieldProps, ITextInput {}

const MySelect: FC<IMySelect> = ({ ...props }) => {
  const {
    field: { name },
    options,
  } = props;

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
      // onChange={(val: any) => helpers.setValue(val.value)}
      // value={options.find((el) => el.value === field.value)}
    />
  );
};
export default MySelect;

{
  /*  */
}
