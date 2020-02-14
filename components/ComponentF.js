import React from "react";
import { UserContext } from "../index";
function ComponentF() {
  return (
    <UserContext.Consumer>
      {user => {
        return <div>Username: {user}</div>;
      }}
    </UserContext.Consumer>
  );
}

export default ComponentF;
