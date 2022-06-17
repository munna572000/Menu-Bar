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

    // Axios({
    //   method: "post",
    //   url: "https://urlsdemo.in/mangtum/panel/api/v1.0/login",
    //   data: bodyFormData,
    //   headers: {
    //     Accept: "application/json",
    //     Authorization: `Bearer `,
    //   },
    // })
    //   .then(function (response) {
    //     //handle success
    //     console.log(response);
    //   })
    //   .catch(function (response) {
    //     //handle error
    //     console.log(response);
    //   });
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
