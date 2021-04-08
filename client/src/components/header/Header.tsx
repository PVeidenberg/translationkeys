import * as React from "react";
import "./header.scss";
import { useMutation, gql } from "@apollo/client";
import { useLogoutMutation } from "../../schema";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import { useAppContext } from "../../projectState/AppContext";
import Paths from "../../Paths";

// logout mutation (generates useLogoutMutation hook)
gql`
  mutation Logout {
    logout
  }
`;

export default function Header(props: any) {
  const { isAuthenticated } = useAppContext();
  const [logout, logoutResult] = useLogoutMutation({
    refetchQueries: ["Viewer"],
    awaitRefetchQueries: true,
  });
  const history = useHistory();
  // const location = useLocation();

  const handleLogout = async () => {
    const response = await logout();

    if (response.data) {
      history.push(Paths.landing);
    }
  };

  const handleLogin = () => {
    history.push(Paths.login);
  };

  const handleSignup = () => {
    history.push(Paths.signup);
  };

  return (
    <div className="header-container">
      <div>
        <span>Welcome: </span>
        <strong>{"Pärt Veidenberg"}</strong>
      </div>
      <div>
        {isAuthenticated ? (
          <button className="logout-button" onClick={() => handleLogout()}>
            LOG OUT
          </button>
        ) : (
          <>
            <button className="login-button" onClick={() => handleLogin()}>
              LOG IN
            </button>
            <button className="signup-button" onClick={() => handleSignup()}>
              SIGN UP
            </button>
          </>
        )}
      </div>
    </div>
  );
}
