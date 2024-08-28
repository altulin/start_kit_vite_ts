import { InputHTMLAttributes } from "react";
import { Reference } from "yup";

export type TParams = (
  | string
  | number
  | RegExp
  | Reference<unknown>[]
  | boolean[]
)[];

export interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
  label_text: string;
  modifier?: string | null;
  validations?: { type: string; params: TParams }[];
  validation_type?: string;
}
