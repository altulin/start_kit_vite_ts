import { InputHTMLAttributes } from "react";
import { Reference } from "yup";

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
  label_text: string;
  required?: boolean;
  autocomplete?: "on" | "off";
  validation_type?: string;
  modifier?: string | null;
  validations?: {
    type: string;
    params: (string | number | RegExp | Reference<unknown>[] | boolean[])[];
  }[];
}
