import React from "react";
import { AuthContext } from "../providers/AuthProvider";

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

const withUser = (Component) => {
  const WrappedComponent = (props) => {
    return (
      <AuthContext.Consumer>
        {(user) => <Component user={user} {...props} />}
      </AuthContext.Consumer>
    );
  };

  WrappedComponent.displayName = `WithUser(${getDisplayName(Component)})`;

  return WrappedComponent;
};

export default withUser;
