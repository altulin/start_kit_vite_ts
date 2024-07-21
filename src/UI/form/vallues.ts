import { IField } from "./types";

export const makeInitialValues = (fields: IField[]) => {
  const object: Record<string, string> = {};

  fields.forEach((item) => {
    if (item.name) {
      object[item.name] = item.init_value ? item.init_value : "";
    }
  });

  return object;
};
