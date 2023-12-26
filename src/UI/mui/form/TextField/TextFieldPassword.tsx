import { IconButton, InputAdornment } from "@mui/material";
import { FC, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextFieldTemplate from "./TextFieldTemplate";

import { ITextField } from "./types";

const FieldTextPassword: FC<ITextField> = ({ formik }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <TextFieldTemplate
      type={showPassword ? "text" : "password"}
      formik={formik}
      label="пароль"
      name="password"
      placeholder="Ваш пароль"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default FieldTextPassword;
