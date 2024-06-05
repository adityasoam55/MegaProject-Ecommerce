import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { FormikInput } from './Input';

function PasswrodReset() {

    function callResetPassword(values) {
        console.log("New Password is :-", values.newpassword);
    }

    const resetPasswordSchema = Yup.object().shape({
        newpassword: Yup.string().required("Password is required").min(8),
        "re-enter-password": Yup.string().required("Password is required").min(8),
    });

    const initialValues={
        newpassword: "",
        "re-enter-password": "",
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex flex-col items-center w-60 gap-2 bg-white py-4 rounded-lg'>
                <Formik initialValues={initialValues} onSubmit={callResetPassword} validationSchema={resetPasswordSchema} validateOnMount>
                    <Form className='flex flex-col items-center'>
                        <h3 className='font-medium mb-2'>SetUp New Password</h3>
                        <FormikInput
                            id="newpassword"
                            name="newpassword"
                            type='text'
                            placeholder='New Password'
                        />
                        <FormikInput
                            id="re-enter-password"
                            name="re-enter-password"
                            type="text"
                            placeholder='Re-Enter Password'
                        />
                        <div>
                            <button className='border border-black bg-tomato-default text-white rounded-md px-2 py-0.5 my-2'
                                type='submit'
                                onClick={callResetPassword}
                            >
                                Reset Now</button>
                        </div>
                        <Link className='text-sm text-blue-600 hover:underline' to="/login/">Go back to Login page?</Link>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default PasswrodReset;