import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Input from './Input';

function Signup() {

    function handleClick(values) {
        console.log("Sending data...", values.fullname, values.phone, values.email, values.password);
    }

    const SignupSchema = Yup.object().shape({
        fullname: Yup.string().required(),
        phone: Yup.number().required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(8, "Password must be of 8 characters").required()
    })

    const { handleSubmit, values, handleChange, resetForm, errors, handleBlur, touched, isValid } = useFormik({
        initialValues: {
            fullname: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        onSubmit: handleClick,
        validationSchema: SignupSchema,
    })

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex flex-col items-center w-80 gap-2 bg-gray-200 py-4 rounded-lg'>
                <h3 className='font-bold'>SignUp to codeAdi.io</h3>
                <Link to='/login/' className='text-sm'>Already have an Account? <span className='text-blue-600'>Login</span></Link>
                <Input
                    type="text"
                    placeholder="Full Name"
                    name="fullname"
                    value={values.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.fullname}
                    error={errors.fullname}
                />
                <Input
                    type='text'
                    placeholder='Phone'
                    name='phone'
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.phone}
                    error={errors.phone}
                />
                <Input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.email}
                    error={errors.email}
                />
                <Input
                    type="password"
                    placeholder='Password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.password}
                    error={errors.password}
                />
                <Input
                    type="password"
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    value={values.confirmPassword}
                    onChange={handleChange}

                />
                <div>
                    <button className='bg-blue-600 text-white rounded-md px-2 py-0.5 mr-4'
                        type='button'
                        onClick={resetForm}
                    >
                        Reset</button>

                    <button className='bg-blue-600 text-white rounded-md px-2 py-0.5 disabled:bg-blue-400'
                        type='submit'
                        onClick={handleSubmit}
                        disabled={!isValid}
                    >
                        Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;