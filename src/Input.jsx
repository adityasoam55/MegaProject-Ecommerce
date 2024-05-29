import { useField } from 'formik';
import React from 'react';

function Input({ id, name, ...rest }) {

    const field = useField(name);
    const [ data, meta ] = field;

    const { value, onChange, onBlur } = data;
    const { touched, error,  } = meta;
    
    return (
        <div>
            <input className='border outline-none rounded-md px-2 mb-1'
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...rest}
            />
            {touched && error && <p className='font-xs text-red-600'>{error}</p>}
        </div>
    )
}

export default Input;