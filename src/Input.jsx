import React from 'react';

function Input({ touched, error, ...rest }) {
    
    return (
        <div>
            <input className='border outline-none rounded-md px-2'
                touched={touched}
                error={error}
                {...rest}
            />
            {touched && error && <p className='font-xs text-red-600'>{error}</p>}
        </div>
    )
}

export default Input;