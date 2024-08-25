import { Form, Formik } from "formik";
import { FC, useEffect } from "react";
import { fields } from "./assets";
import { makeSchema } from "../validation/schema";
import { makeInitialValues } from "../vallues";
import FieldComponent from "../hoc/Field";

const FormTemplate: FC = () => {
  useEffect(() => {
    makeSchema(fields);
  }, []);
  return (
    <Formik
      initialValues={makeInitialValues(fields)}
      validationSchema={makeSchema(fields)}
      onSubmit={() => {}}
    >
      {() => {
        // console.log(formik.errors);
        return (
          <Form>
            {fields.map((item, i) => (
              <FieldComponent key={i} {...item} />
            ))}
          </Form>
        );
      }}
    </Formik>
  );
};
export default FormTemplate;
