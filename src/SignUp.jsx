import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { FormikInput } from './Input';
import axios from 'axios';

function Signup() {

    function signUpApiCall(values) {
        axios.post("https://myeasykart.codeyogi.io/signup", {
          fullName: values.fullname,
          email: values.email,
          password: values.password,
        });
      }
    
      const schema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required(),
        password: Yup.string().required("Password is required").min(8),
        fullname: Yup.string().required("Name is required"),
        confirmPassword: Yup.string().required("Password is required").min(8),
      });
    
      const initialValues = {
        email: "",
        fullname: "",
        password: "",
      };

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex flex-col items-center w-80 gap-2 bg-white py-4 rounded-lg'>
                <Formik initialValues={initialValues} onSubmit={signUpApiCall} validationSchema={schema} validateOnMount >
                    <Form className='flex flex-col items-center'>
                        <h3 className='font-bold mb-1'>SignUp to Amazon.org</h3>
                        <Link to='/login/' className='text-sm mb-1'>Already have an Account? <span className='text-blue-600 hover:underline'>Login</span></Link>
                        <FormikInput
                            type="text"
                            placeholder="Full Name"
                            name="fullname"
                            id="fullname"
                            required
                        />
                        <FormikInput
                            type='email'
                            placeholder='Email'
                            name='email'
                            id='email'
                            required
                        />
                        <FormikInput
                            type="password"
                            placeholder='Password'
                            name='password'
                            id="password"
                            required
                        />
                        <div className='mt-2'>
                            <button className='border border-black bg-tomato-default text-white rounded-md px-2 py-0.5 mr-4'
                                type='button'
                            // onClick={resetForm}
                            >
                                Reset</button>

                            <button className='border border-black bg-tomato-default text-white rounded-md px-2 py-0.5 disabled:bg-blue-400'
                                type='submit'
                            >
                                Sign Up</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Signup;