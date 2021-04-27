import React from "react";
import "./login-form.scss";
import classnames from "classnames";
import { gql } from "@apollo/client";
import Paths from "../../Paths";
import { useHistory } from "react-router-dom";
import { Field } from "../../components/Field/Field";
import { useForm, SubmitHandler } from "react-hook-form";
import { getFieldErrors } from "../../services/getFieldErrors";
import { useLoginMutation } from "../../schema";
import { ReactComponent as EmailIcon } from "../../theme/icons/email-icon.svg";
import { ReactComponent as PasswordIcon } from "../../theme/icons/password-icon.svg";
import { validateEmail } from "../../validators/validateEmail";
import { validateMinimumLength } from "../../validators/validateMinimumLength";

interface LoginFormValues {
  email: string;
  password: string;
}

// login mutation (generates useLoginMutation hook)
gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
    }
  }
`;

export default function LogInForm(props: any) {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm<LoginFormValues>();

  // setup login mutation
  const [login, loginResult] = useLoginMutation({
    refetchQueries: ["Viewer"],
    awaitRefetchQueries: true,
  });

  // get combined client and server side field errors
  // const fieldError = getFieldErrors(loginResult.error, errors);

  // login user on submit
  const onSubmit: SubmitHandler<LoginFormValues> = async ({ email, password }) => {
    const response = await login({
      variables: { email, password },
    });

    // redirect to stored page or next page if login is successful
    if (response.data) {
      history.push(Paths.projects);
    }
  };

  // handle system error
  // if (isSystemError(loginResult.error)) {
  //   return <ErrorView error={loginResult.error} />;
  // }

  return (
    <div className="login-form">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Field
          type="email"
          name="email"
          label="Email"
          defaultValue=""
          leading={<EmailIcon />}
          error={errors.email}
          register={register({
            required: "Email is required",
            validate: validateEmail,
          })}
        />
        {errors.email ? <span className="error-text">Email field cannot be empty.</span> : null}
        <Field
          type="password"
          name="password"
          label="Password"
          defaultValue=""
          leading={<PasswordIcon />}
          error={errors.password}
          register={register({ validate: validateMinimumLength(1) })}
        />
        {errors.password ? <span className="error-text">Password must be more than 7 characters long.</span> : null}
        <input className={classnames("button")} type="submit" value="Log in" />
      </form>
    </div>
  );
}
