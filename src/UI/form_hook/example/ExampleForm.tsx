import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formData } from "./data";
import { validateSchema } from "../utils/validation/yupSchemaCreator";
import { makeInitialValues } from "../utils/initialValues";
import Field from "../components/Field";

const ExampleForm: FC = () => {
  const { ...methods } = useForm({
    resolver: yupResolver(validateSchema(formData)),
    mode: "onChange",
    defaultValues: makeInitialValues(formData),
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  const onSubmit = (data: Record<string, unknown>) => {
    console.log(data);
    // reset();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      // лучше тут очистить
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <FormProvider {...methods}>
      <form action="#" id="form" onSubmit={handleSubmit(onSubmit)}>
        {formData.map((item, i) => (
          <Field key={i} {...item} />
        ))}
      </form>
    </FormProvider>
  );
};
export default ExampleForm;
