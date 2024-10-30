import { FieldProps } from "formik";
import { InputHTMLAttributes } from "react";
import { Reference } from "yup";

export enum EnumTextInput {
  label_text = "label_text",
  modifier = "modifier",
  validations = "validations",
  validation_type = "validation_type",
  component = "component",
  options = "options",
  radio_list = "radio_list",
  minRows = "minRows",
}

export type TParams = (
  | string
  | number
  | RegExp
  | Reference<unknown>[]
  | boolean[]
  | object
)[];

type TRadioItem = {
  label: string;
  value: string;
};

export interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
  [EnumTextInput.label_text]?: string;
  [EnumTextInput.modifier]: string | null | undefined;
  [EnumTextInput.validations]?: { type: string; params: TParams }[];
  [EnumTextInput.validation_type]?: string;
  [EnumTextInput.component]?: string | React.ComponentType<FieldProps>;
  [EnumTextInput.options]?: OptionsType;
  [EnumTextInput.radio_list]?: TRadioItem[];
  [EnumTextInput.minRows]?: number;
}

export type OptionsType = { [key: string]: string | number }[];
