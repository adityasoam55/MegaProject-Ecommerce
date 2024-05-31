import React from "react"
import FormikHOC from "./FormikHOC";

function Input({ id, name, value, touched, error, ...rest }){
 

    return(
        <div>
            <input 
            id={id}
            name={name}
            value={value}
            {...rest}
            />
        </div>
    );
}

export const FormikInput = FormikHOC(Input);

export default Input;