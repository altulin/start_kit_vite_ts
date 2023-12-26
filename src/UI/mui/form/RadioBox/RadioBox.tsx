import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { ITextField } from "../TextField/types";
import { FC } from "react";

const RadioBox: FC<ITextField> = ({ formik }) => {
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="male"
      name="sex"
      value={formik.values.sex}
      onChange={formik.handleChange}
    >
      <FormControlLabel value="male" label="Мужской" control={<Radio />} />
      <FormControlLabel value="female" label="Женский" control={<Radio />} />
    </RadioGroup>
  );
};

export default RadioBox;
