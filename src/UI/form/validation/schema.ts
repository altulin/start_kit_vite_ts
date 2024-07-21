import { StringSchema } from "yup";
import { IField } from "../types";
import { validationsObj } from "./validation";
import * as yup from "yup";

export const makeSchema = (fields: IField[]) => {
  const requiredList = fields.filter((field) => field.required === true);
  const object: Record<string, StringSchema> = {};

  requiredList.forEach((item) => {
    if (item.name) {
      object[item.name] = validationsObj[item.name];
    }
  });

  return yup.object().shape(object);
};
