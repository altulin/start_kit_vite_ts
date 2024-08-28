/* eslint-disable no-useless-escape */

import MySelect from "../components/Select";
import { required } from "../validation/errText";

export const fieldSelect = (label: string, modifier?: string) => {
  return {
    label_text: label,
    type: "select",
    name: "select",
    validation_type: "string",
    modifier,
    component: MySelect,
    options: [],
    validations: [
      {
        type: "required",
        params: [required],
      },
    ],
  };
};
