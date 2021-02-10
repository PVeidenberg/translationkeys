import React, { useState } from "react";
import "./login-form.css";
import { useMutation, useLazyQuery, gql, useQuery } from "@apollo/client";
import Paths from "../../Paths";
import { Redirect, useHistory } from "react-router-dom";

export default function LogInForm(props: any) {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("handleLoginFormSubmit");
  }

  return (
    <div className="login-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-row">
          <label>E-mail address:</label>
          <input
            className="input"
            type="email"
            id="loginFormEmail"
            name="loginFormEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Password:</label>
          <input
            className="input"
            type="password"
            id="loginFormPassword"
            name="loginFormPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="button" disabled={false} type="submit">
          {"Log In"}
        </button>
      </form>
    </div>
  );
}
