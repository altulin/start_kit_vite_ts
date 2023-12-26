export interface IInitialValues {
  name: string;
  password: string;
  phone: string;
  mail: string;
  sex: string;
  rule: boolean;
  [key: string]: string | boolean;
}

export const initialValues: IInitialValues = {
  name: "",
  password: "",
  phone: "",
  mail: "",
  sex: "male",
  rule: true,
};
