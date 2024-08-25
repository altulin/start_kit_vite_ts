import { InputHTMLAttributes } from "react";

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
  label_text: string;
  required?: boolean;
  init_value?: string;
  autocomplete?: "on" | "off";
}
