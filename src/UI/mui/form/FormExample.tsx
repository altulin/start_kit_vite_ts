import { Button } from "@mui/material";
import { useFormik } from "formik";
import { initialValues } from "./initialValues";
import FieldText from "./TextField/FieldText";
import FieldTextPassword from "./TextField/TextFieldPassword";
import { validationSchema } from "./yup";
import TextFieldTel from "./TextField/TextFieldTel";
import TextFieldMail from "./TextField/TextFieldMail";
import RadioBox from "./RadioBox/RadioBox";
import CheckBox from "./CheckBox/CheckBox";

function FormExample() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FieldText formik={formik} />
      <FieldTextPassword formik={formik} />
      <TextFieldTel formik={formik} />
      <TextFieldMail formik={formik} />
      <RadioBox formik={formik} />
      <CheckBox formik={formik} />
      <Button type="submit" disabled={!formik.isValid || !formik.dirty}>
        Отправить
      </Button>
    </form>
  );
}

export default FormExample;
