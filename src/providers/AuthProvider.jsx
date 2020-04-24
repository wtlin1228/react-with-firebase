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
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({ user: { uid: snapshot.id, ...snapshot.data() } });
        });
      }

      this.setState({ userAuth });
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
