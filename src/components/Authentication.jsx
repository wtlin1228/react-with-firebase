import React, { useContext } from "react";

import CurrentUser from "./CurrentUser";
import SignInAndSignUp from "./SignInAndSignUp";
import { AuthContext } from "../providers/AuthProvider";

const Authentication = ({ loading }) => {
  const user = useContext(AuthContext);
  if (loading) return null;

  return <div>{user ? <CurrentUser /> : <SignInAndSignUp />}</div>;
};

export default Authentication;
