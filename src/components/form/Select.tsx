/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetUsersQuery } from "@/store/rtk/user/userApi";
import { FC, useEffect, useState } from "react";
import Select from "react-select";

interface ISelectField {
  placeholder?: string;
  field: any;
  form: any;
}

const SelectField: FC<ISelectField> = ({ field, form, placeholder }) => {
  const resp = useGetUsersQuery("users", {});
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (!resp.data) return;

    setOptions(
      resp.data.map((user: any) => ({
        value: user.id,
        label: user.name,
      })) || [],
    );
  }, [resp.data]);

  return (
    <Select
      options={options}
      name={field.name}
      value={
        options
          ? options.find(
              (option: { value: number }) => option.value === field.value,
            )
          : ""
      }
      onChange={(option: any) => {
        form.setFieldValue(field.name, option ? option["label"] : "");
      }}
      onBlur={field.onBlur}
      placeholder={placeholder}
    />
  );
};

export default SelectField;
