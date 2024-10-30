import { FieldProps } from "formik";
import { InputHTMLAttributes } from "react";
import { Reference } from "yup";

export const keys = {
  modifier: "modifier",
} as const;

export type TParams = (
  | string
  | number
  | RegExp
  | Reference<unknown>[]
  | boolean[]
  | object
)[];

export interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
  label_text?: string;
  [keys.modifier]: string | null | undefined;
  validations?: { type: string; params: TParams }[];
  validation_type?: string;
  component?: string | React.ComponentType<FieldProps>;
  options?: OptionsType;
  radio_list?: TRadioItem[];
  minRows?: number;
}

type TRadioItem = {
  label: string;
  value: string;
};

export type OptionsType = { [key: string]: string | number }[];
