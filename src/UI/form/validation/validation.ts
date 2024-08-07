/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-escape */
import { StringSchema } from "yup";
import * as yup from "yup";
import {
  confirmPasswordMatch,
  file,
  nameMax,
  nameMin,
  passwordMax,
  passwordMin,
  required,
  requiredCheck,
  valid,
} from "./errText";

// export const validationSchema = yup.object().shape({
export const validationsObj: Record<string, StringSchema | any> = {
  name: yup
    .string()
    .required(required)
    .matches(/[^-]$/, valid)
    .min(2, nameMin)
    .max(50, nameMax),

  phone: yup
    .string()
    .required(required)
    .matches(/^(\+7|8) \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/gm, valid),

  email: yup
    .string()
    .required(required)
    .matches(/@[^.]*\./, valid)
    .email(valid),

  password: yup
    .string()
    .required(required)
    .min(8, passwordMin)
    .max(14, passwordMax),

  confirm_password: yup
    .string()
    .required(required)
    .oneOf([yup.ref("password")], confirmPasswordMatch),

  rule: yup.boolean().oneOf([true], requiredCheck),

  select: yup.string().required(required),

  file: yup.mixed().required(file),
  // .test("fileFormat", "Only PDF files are allowed", (value) => {
  //   if (value) {
  //     const supportedFormats = ["pdf"];
  //     console.log(value);
  //     return supportedFormats.includes(value.split(".").pop());
  //   }
  //   return true;
  // }),

  // rule: yup.boolean().oneOf([true], requiredCeck),
};
