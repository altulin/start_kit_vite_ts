import { Form, Formik } from "formik";
import { FC } from "react";
import { formData } from "./form_data";
import { makeInitialValues } from "../initialValues";
import FieldComponent from "../hoc/FieldComponent";
import { validateSchema } from "../validation/yupSchemaCreator";

const FormTemplate: FC = () => {
  return (
    <Formik
      initialValues={{ ...makeInitialValues(formData), rule: true }}
      validationSchema={validateSchema(formData)}
      onSubmit={() => {}}
    >
      {(formik) => {
        console.log(formik.errors);
        return (
          <Form>
            {formData.map((item, i) => (
              <FieldComponent key={i} {...item} />
            ))}
          </Form>
        );
      }}
    </Formik>
  );
};
export default FormTemplate;
