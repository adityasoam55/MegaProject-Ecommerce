import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import Input from './Input';

function Login2() {
    function handleClick(values) {
        console.log("Sending Data...", values.email, values.password);
    }

    const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(8, "Password must have 8 character").required(),
    })

    const { handleSubmit, values, handleChange, resetForm, errors, handleBlur, touched, isValid } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: handleClick,
        validationSchema: schema,

    })

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex flex-col items-center w-60 gap-2 bg-gray-200 py-4 rounded-lg'>
                <h3 className='font-bold'>Login to codeAdi.io</h3>
                <Link to='/' className='text-sm'>Don't have an Account? <span className='text-blue-600'>SignUp</span></Link>
                <Input
                    type="email"
                    value={values.email}
                    placeholder="Email"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.email}
                    error={errors.email}
                />

                <Input
                    type="password"
                    value={values.password}
                    placeholder="Password"
                    name="password"
                    autoComplete="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.password}
                    error={errors.password}
                />
                <div>
                    <button className='bg-blue-600 text-white rounded-md px-2 py-0.5 outline-none disabled:bg-blue-300'
                        type='submit'
                        onClick={handleSubmit}
                        disabled={!isValid}
                    >
                        Login</button>
                </div>
                <Link to="/passwordreset/" className='text-sm text-red-500'>Forgot Password?</Link>
            </div>
        </div>
    )
}


export default Login2;