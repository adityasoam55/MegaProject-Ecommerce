import React, { useContext } from 'react';
import { AlertContext, UserContext } from './Contexts';

function withProvider(provider) {
    function MyHoc(IncomingComponent) {
        function OutgoingComponent(props) {
            const contexData = useContext(provider);
            return <IncomingComponent {...props} {...contexData}/>
        }
        return OutgoingComponent;
    }
    return MyHoc;
}

export default withProvider;

export const withUser = withProvider(UserContext);
export const withAlert = withProvider(AlertContext);
