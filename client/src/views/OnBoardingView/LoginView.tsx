import * as React from "react";
import Header from "../../components/header/Header";
import LoginForm from "../../components/loginForm/LogInForm";
import "./login-view.scss";

export default function LoginView(props: any) {
  return (
    <div className="login-view-container">
      <Header />
      <LoginForm />
    </div>
  );
}
