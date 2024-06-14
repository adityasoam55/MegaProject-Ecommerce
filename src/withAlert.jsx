import React from "react";
import { AlertContext } from "./App";

function withAlert(IncomingComponent) {
  function OutgoingComponent(props) {
    const { alert, setAlert, removeAlert } = React.useContext(AlertContext);
    return (
      <IncomingComponent
        alert={alert}
        setAlert={setAlert}
        removeAlert={removeAlert}
        {...props}
      />
    );
  }
  return OutgoingComponent;
}

export default withAlert;
