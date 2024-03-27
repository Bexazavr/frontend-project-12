import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form, Field } from "formik";

const Login = () => (
  <Formik
    initialValues={{ login: "", password: "" }}
    onSubmit={({ setSubmitting }) => {
      console.log("Form is validated! Submitting the form...");
      setSubmitting(false);
    }}
  >
    {() => (
      <Form>
        <div className="form-group mb-3">
          <label htmlFor="login">Ваш ник</label>
          <Field type="text" name="login" className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Пароль</label>
          <Field type="password" name="password" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">
          Войти
        </button>
      </Form>
    )}
  </Formik>
);

export default Login;
