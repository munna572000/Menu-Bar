import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";
function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email").required("requirred"),
    password: Yup.string().required("reqired"),
  });
  const onSubmit = (values, { resetForm }) => {
    resetForm({ values: "" });

    var bodyFormData = new FormData();

    bodyFormData.append("email", values.email);

    bodyFormData.append("password", values.password);

    Axios.post(
      "https://urlsdemo.in/mangtum/panel/api/v1.0/login",
      bodyFormData,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer `,
        },
      }
    ).then((res) => {
      console.log(res?.data?.data?.ID);
      localStorage.setItem("user_id", res?.data?.data?.ID);
      localStorage.setItem("user_username", res?.data?.data?.username);
      localStorage.setItem("token", res?.data?.data?.token);
    });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="text.center">
            <Field
              name="email"
              type="email"
              placeholder="Email*"
              className="my-1 py-1 "
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <br />
            <Field
              name="password"
              type="password"
              placeholder="password*"
              className="my-1 py-1"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <br />
            <button type="submit" className="py-2 btn btn-dark .text.center  ">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default LoginForm;

import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  
  const nav = useNavigate();
  const user = localStorage.getItem("user_id");
  useEffect(() => {
    if (user != null) {
      nav("/");
    }
    console.log(user);
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email").required("requirred"),
    password: Yup.string().required("reqired"),
  });
  const onSubmit = (values, { resetForm }) => {
    resetForm({ values: "" });

    var bodyFormData = new FormData();

    bodyFormData.append("email", values.email);

    bodyFormData.append("password", values.password);

    Axios.post(
      "https://urlsdemo.in/mangtum/panel/api/v1.0/login",
      bodyFormData,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer `,
        },
      }
    ).then((res) => {
      nav("/");

      console.log(res?.data?.data?.ID);
      localStorage.setItem("user_id", res?.data?.data?.ID);
      localStorage.setItem("user_username", res?.data?.data?.username);
      localStorage.setItem("token", res?.data?.data?.token);
    });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="text.center">
            <Field
              name="email"
              type="email"
              placeholder="Email*"
              className="my-1 py-1 "
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <br />
            <Field
              name="password"
              type="password"
              placeholder="password*"
              className="my-1 py-1"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <br />
            <button type="submit" className="py-2 btn btn-dark .text.center  ">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default LoginForm;

