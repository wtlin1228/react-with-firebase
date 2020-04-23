import React, { Component, createContext } from "react";
import { auth, createUserProfileDocument } from "../firebase";

export const AuthContext = createContext();

class AuthProvider extends Component {
  state = {
    user: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const user = await createUserProfileDocument(userAuth);

      this.setState({ user });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };

  render() {
    const { user } = this.state;
    const { children } = this.props;

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
  }
}

export default AuthProvider;
