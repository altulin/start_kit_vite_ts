import { FC } from "react";
import { ITextField } from "../TextField/types";
import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Stack,
} from "@mui/material";

const CheckBox: FC<ITextField> = ({ formik }) => {
  return (
    <Stack>
      <FormControlLabel
        name="rule"
        control={<Checkbox defaultChecked onChange={formik.handleChange} />}
        label={<a href="/">ссылка</a>}
        onChange={formik.handleChange}
      />
      <FormHelperText error>{formik.errors.rule}</FormHelperText>
    </Stack>
  );
};

export default CheckBox;
