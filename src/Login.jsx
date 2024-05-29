import { Formik, Form } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

function Login() {
  function callLoginApi(values) {
    console.log("calling login api", values.email, values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(),
    password: Yup.string().required("Password is required").min(8),
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
        <Form className="w-60 bg-gray-200 p-5 rounded-md flex flex-col justify-center items-center">
            <h2 className="font-bold mb-2">Login to codeAdi.io</h2>
           <span className="text-xs mb-1">don't have a account? <Link to="/signup" className="text-xs text-blue-700">
            SignUp
          </Link></span> 
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <Input
            id="password"
            type="text"
            name="password"
            placeholder="Password"
            required
          />

          <div className="mb-1">
            <button
              className="border bg-blue-500 text-white rounded-md px-2 mt-2"
              type="button"
              /* onClick={resetForm} */
            >
              Reset
            </button>
            <button
              className="border bg-blue-500 text-white rounded-md px-2 mt-2"
              type="submit"
            >
              Login
            </button>
          </div>
          <Link to="/passwordreset" className="text-xs text-red-700 mt-1">
          Reset Password
          </Link>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
