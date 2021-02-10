import * as React from "react";
import Header from "../../components/header/Header";
import SignupForm from "../../components/signupForm/SignupForm";
import "./signup-view.css";

export default function SignupView(props: any) {
  return (
    <div className="login-view-container">
      <Header />
      <SignupForm />
    </div>
  );
}
