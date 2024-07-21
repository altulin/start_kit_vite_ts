import { Form, Formik } from "formik";
import { FC, useEffect } from "react";
import { fields } from "./assets";
import TextInput from "@/UI/form/components/TextInput";
import { makeSchema } from "../validation/schema";
import { makeInitialValues } from "../vallues";

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
              <TextInput key={i} {...item} />
            ))}
          </Form>
        );
      }}
    </Formik>
  );
};
export default FormTemplate;
