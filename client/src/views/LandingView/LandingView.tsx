import * as React from "react";
import Header from "../../components/header/Header";
import "./landing-view.scss";

export default function LandingView(props: any) {
  return (
    <div className="login-view-container">
      <Header />
      <a>WELCOME TO THE LANDINGPAGE PAGE</a>
    </div>
  );
}
