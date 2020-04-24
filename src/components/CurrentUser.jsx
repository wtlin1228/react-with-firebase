import React, { useContext } from "react";

import moment from "moment";
import { signOut } from "../firebase";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const CurrentUser = ({ children }) => {
  const user = useContext(AuthContext);
  const { displayName, photoURL, email, createdAt } = user;

  return (
    <section className="CurrentUser">
      <div className="CurrentUser--profile">
        {photoURL && <img src={photoURL} alt={displayName} />}
        <div className="CurrentUser--information">
          <Link to="/profile">
            <h2>{displayName}</h2>
          </Link>
          <p className="email">{email}</p>
          <p className="created-at">{moment(createdAt).calendar()}</p>
        </div>
      </div>
      <div>
        <div>{children}</div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </section>
  );
};

export default CurrentUser;
