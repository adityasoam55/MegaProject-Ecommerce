import { useField } from "formik";
import React from "react";


function FormikHOC(IncomingComponent){

    function OutgoingComponent({ id, name, ...rest }) {

        const field = useField(name);
        const [ data, meta ] = field;
    
        const { value, onChange, onBlur } = data;
        const { touched, error,  } = meta;

        let borderClass = " border-gray-300 focus:border-blue-500";

        if(touched && error){
            borderClass = " border-red-500";
        }
        
        return (
            <div>
                <IncomingComponent className={'border-2 border-gray-300 outline-none rounded-md px-2 mb-1 focus:border-indigo-500' + borderClass}
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

    return OutgoingComponent;

}

export default FormikHOC;