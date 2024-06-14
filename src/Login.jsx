import { Formik, Form } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import { FormikInput } from "./Input";
import axios from "axios";
import withUser from "./withUser";
import withAlert from "./withAlert";

function Login({ setUser, setAlert }) {
  function callLoginApi(values) {
      axios
        .post("https://myeasykart.codeyogi.io/login", {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          const { user, token } = response.data;
          localStorage.setItem("token", token);
          setUser(user);
        })
        .catch(() => {
          setAlert({ type: "error", message: "Invalid Login details. Please try again"});
        });
    }

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(),
    password: Yup.string().required("Password is required").min(6),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="w-full h-full p-5 flex justify-center items-center ">
      <Formik
        initialValues={initialValues}
        onSubmit={callLoginApi}
        validationSchema={schema}
        validateOnMount
      >
        <Form className="w-60 bg-white p-5 rounded-md flex flex-col justify-center items-center">
          <h2 className="font-bold mb-2">Login to Amazon.org</h2>
          <span className="text-xs mb-1">don't have a account? <Link to="/signup" className="text-xs text-blue-700 hover:underline">
            SignUp
          </Link></span>
          <FormikInput
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <FormikInput
            id="password"
            type="text"
            name="password"
            placeholder="Password"
            required
          />

          <div className="mb-1 flex gap-2">
            <button
              className="border border-black bg-tomato-default text-white rounded-md px-2 mt-2"
              type="button"
            /* onClick={resetForm} */
            >
              Reset
            </button>
            <button
              className="border border-black bg-tomato-default text-white rounded-md px-2 mt-2"
              type="submit"
            >
              Login
            </button>
          </div>
          <Link to="/passwordreset" className="text-xs text-red-700 mt-1 hover:underline ">
            Reset Password
          </Link>
        </Form>
      </Formik>
    </div>
  );
}

export default withAlert(withUser(Login));
