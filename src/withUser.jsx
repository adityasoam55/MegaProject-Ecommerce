import React from "react";
import { UserContext } from "./App";

function withUser(IncomingComponent) {
  function OutgoingComponent(props) {
    const { user, setUser } = React.useContext(UserContext);
    return <IncomingComponent user={user} setUser={setUser} {...props} />;
  }
  return OutgoingComponent;
}

export default withUser;
