import React, { useState } from "react";
import "./signup-form.css";
import { useMutation, useLazyQuery, gql, useQuery } from "@apollo/client";
import Paths from "../../Paths";
import { Redirect, useHistory } from "react-router-dom";

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

// registration mutation (generates useRegisterMutation hook)
gql`
  mutation Register(
    $name: String!
    $email: String!
    $password: String!
    $repeatPassword: String
  ) {
    register(
      name: $name
      email: $email
      password: $password
      repeatPassword: $repeatPassword
    ) {
      ...UserInfo
    }
  }
`;

export default function SignupForm(props: any) {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("handleSubmitSignup");
  }

  return (
    <div className="signup-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-row">
          <label>Name:</label>
          <input
            className="input"
            type="text"
            id="signFormNameField"
            name="signFormNameField"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label>E-mail address:</label>
          <input
            className="input"
            type="signupFormEmail"
            id="signupFormEmail"
            name="user_mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label>Password:</label>
          <input
            className="input"
            type="password"
            id="signupFormPassword"
            name="signupFormPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label>Repeat password:</label>
          <div className="parallel">
            <input
              className="input"
              type="password"
              id="repeat-signupFormPassword"
              name="repeatSignupFormPassword"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <button className="button" disabled={false} type="submit">
            {"Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
}
