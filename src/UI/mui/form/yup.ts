import * as yup from "yup";
import {
  nameMax,
  nameMin,
  passwordMax,
  passwordMin,
  required,
  requiredCeck,
  valid,
} from "../../form/input/js/errText";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required(required)
    .matches(/[^-]$/, valid)
    .min(2, nameMin)
    .max(50, nameMax),

  password: yup
    .string()
    .required(required)
    .min(8, passwordMin)
    .max(14, passwordMax),

  phone: yup.string().required(required).min(18, valid),

  mail: yup
    .string()
    .required(required)
    .matches(/@[^.]*\./, valid)
    .email(valid),

  rule: yup.boolean().oneOf([true], requiredCeck),
});
