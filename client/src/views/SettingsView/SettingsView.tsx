import * as React from "react";
import Header from "../../components/header/Header";
import "./settings-view.scss";

export default function SettingsView(props: any) {
  return (
    <div className="login-view-container">
      <Header />
      <a>Your api key:</a>
      <a>{props.location.state}</a>
    </div>
  );
}
