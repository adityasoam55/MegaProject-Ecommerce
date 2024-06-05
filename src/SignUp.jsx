import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { FormikInput } from './Input';

function Signup() {

    function signupApicall(values) {
        console.log("Sending data...", values.fullname, values.phone, values.email, values.password);
    }

    const SignupSchema = Yup.object().shape({
        fullname: Yup.string().required(),
        phone: Yup.number().required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(8, "Password must be of 8 characters").required()
    })

    const initialValues = {
        fullname: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex flex-col items-center w-80 gap-2 bg-white py-4 rounded-lg'>
                <Formik initialValues={initialValues} onSubmit={signupApicall} validationSchema={SignupSchema} validateOnMount >
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
                            type='text'
                            placeholder='Phone'
                            name='phone'
                            id="phone"
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
                        <FormikInput
                            type="password"
                            placeholder='Confirm Password'
                            name='confirmPassword'
                            id="confirmpassword"
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
                            // onClick={handleSubmit}
                            // disabled={!isValid}
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