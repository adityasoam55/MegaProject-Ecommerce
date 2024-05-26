import React from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';

function PasswrodReset() {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex flex-col items-center w-60 gap-2 bg-gray-200 py-4 rounded-lg'>
                <h3 className='font-medium'>SetUp New Password</h3>
                <Input
                    type='text'
                    placeholder='New Password'
                />
                <Input
                    type="text"
                    placeholder='Re-Enter Password'
                />
                <div>
                    <button className='bg-blue-600 text-white rounded-md px-2 py-0.5'
                        type='submit'
                    >
                        Reset Now</button>
                </div>
                <Link className='text-sm text-blue-600' to="/login/">Go back to Login page?</Link>
            </div>
        </div>
    )
}

export default PasswrodReset;