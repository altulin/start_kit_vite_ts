import clsx from "clsx";
import style from "./Promo.module.scss";
import { FC } from "react";
import { Form, Formik } from "formik";
import TextInput from "@/components/form/TextInput";
import { onNameInput } from "@/service/form/masks/name";
import { validationSchema } from "@/service/form/validation";
import { onPhoneInput } from "@/service/form/masks/phone";
import PasswordField from "@/components/form/Password";

const Promo: FC = () => {
  return (
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner, "container")}>
        <h1>321321321</h1>

        <Formik
          initialValues={{
            name: "",
            mail: "",
            phone: "",
            text: "",
            password: "",
            confirm_password: "",
            rule: true,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="name"
                label="First Name"
                modifier="primary"
                onInput={onNameInput}
              />
              <TextInput
                type="email"
                name="mail"
                label="mail"
                modifier="primary"
              />
              <TextInput name="text" label="text" as="textarea" />
              <TextInput
                type="tel"
                name="phone"
                label="phone"
                modifier="primary"
                onInput={onPhoneInput}
              />

              <PasswordField name="password" label="password" />
              <PasswordField
                name="confirm_password"
                label="подтвердите пароль"
              />

              <TextInput name="rule" type="checkbox">
                <div className={clsx(style.checkbox)}>
                  <span className={clsx(style.checkbox__icon)}></span>
                  <span className={clsx(style.checkbox__text)}>text</span>
                </div>
              </TextInput>

              <button type="submit">Submit</button>
              {isSubmitting && <p>Submitting...</p>}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
export default Promo;
