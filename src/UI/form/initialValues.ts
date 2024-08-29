import { ITextInput } from "./types";

export const makeInitialValues = (fields: ITextInput[]) => {
  const object: Record<string, string> = {};

  fields.forEach((item) => {
    if (item.name !== undefined && typeof item.value === "string") {
      object[item.name] = item.value;
    } else if (item.name !== undefined) {
      object[item.name] = "";
    }
  });

  return object;
};
