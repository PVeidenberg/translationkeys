import React from "react";
import { gql } from "@apollo/client";
import { Route, Switch, Redirect } from "react-router";
import Paths from "./Paths";
import { BrowserRouter as Router } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { useAppContext } from "../src/projectState/AppContext";
import { useViewerQuery } from "./schema";
import ProjectView from "./views/ProjectView/ProjectView";
import ProjectsView from "./views/ProjectsView/ProjectsView";
import SettingsView from "./views/SettingsView/SettingsView";
import LoginView from "./views/OnBoardingView/LoginView";
import SignupView from "./views/OnBoardingView/SignupView";
import LandingView from "./views/LandingView/LandingView";
import { NotFoundView } from "./views/NotFoundView/NotFoundView";

// main logged in user (viewer) query
gql`
  query Viewer {
    viewer {
      id
    }
  }
`;

export const App: React.FC = () => {
  const { setIsAuthenticated } = useAppContext();

  // attempt to get logged in user (viewer) info
  const { data, loading, error } = useViewerQuery();
  console.log("data", data);

  // // handle error
  if (error) {
    return <LandingView />;
  }

  // handle loading
  if (loading || !data) {
    return <SettingsView />;
  }

  // get viewer info and check whether the user is logged in
  const viewer = data && data.viewer;
  const isLoggedIn = viewer !== null;
  setIsAuthenticated(isLoggedIn);
  console.log("isLoggedIn", isLoggedIn);

  // decide path to redirect to from root path based on whether the user is logged in
  const indexPath = isLoggedIn ? Paths.projects : Paths.landing;

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to={indexPath} />
          </Route>
          <Route exact path={Paths.landing} component={LandingView} />
          <Route exact path={Paths.login} component={LoginView} />
          <Route exact path={Paths.signup} component={SignupView} />
          <ProtectedRoute
            allowed={isLoggedIn}
            path={Paths.projects}
            redirectNotAllowed={Paths.login}
            component={ProjectsView}
          />
          <ProtectedRoute
            allowed={isLoggedIn}
            redirectNotAllowed={Paths.login}
            path={Paths.settings}
            component={SettingsView}
          />
          <ProtectedRoute
            allowed={isLoggedIn}
            redirectNotAllowed={Paths.login}
            path={Paths.project}
            component={ProjectView}
          />
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
