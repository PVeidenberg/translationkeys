import * as React from "react";
import "./header.css";
import { useMutation } from "@apollo/client";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import Paths from "../../Paths";

export default function Header(props: any) {
  const history = useHistory();
  const location = useLocation();

  /*// LOGOUT
  const [logoutUser, logoutUserState] = useMutation(LOGOUT_USER);

  // logoutUser mutation checks
  if (logoutUserState.loading && logoutUserState.called) {
    return <div>LOADING</div>;
  }

  if (logoutUserState.error) {
    return <div>ERRRRRRORRR</div>;
  }

  if (logoutUserState.data && logoutUserState.data.logoutUser.success) {
    // Logout successful, redirect to landing view
    return <Redirect to={Paths.landing} />;
  }
  // ------------------------------
*/
  const handleLogout = async () => {
    history.push(Paths.landing);
  };

  const handleLogin = () => {
    history.push(Paths.login);
  };

  const handleSignup = () => {
    history.push(Paths.signup);
  };

  return (
    <div className="header-container">
      <button className="logout-button" onClick={() => handleLogout()}>
        LOG OUT
      </button>

      <>
        <button className="login-button" onClick={() => handleLogin()}>
          LOG IN
        </button>
        <button className="signup-button" onClick={() => handleSignup()}>
          SIGN UP
        </button>
      </>
    </div>
  );
}
