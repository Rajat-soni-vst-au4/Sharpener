import React, {useContext} from "react";
import AuthContext from "../Store/Auth";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const AuthCtx = useContext(AuthContext);
  // console.log(AuthCtx)
  return (
   <>
        <nav className={classes.nav}>
          <ul>
            {AuthCtx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {AuthCtx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {AuthCtx.isLoggedIn && (
              <li>
                <button onClick={AuthCtx.onlogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
    </>
  );
};

export default Navigation;
