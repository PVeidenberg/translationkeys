import React, { useState } from "react";
import "./signup-form.scss";
import { useForm } from "react-hook-form";
import { Field } from "../../components/Field/Field";
// import { useMutation, useLazyQuery, gql, useQuery } from "@apollo/client";
// import Paths from "../../Paths";
import { useHistory } from "react-router-dom";
import { validateEmail } from "../../validators/validateEmail";
import { validateMinimumLength } from "../../validators/validateMinimumLength";
// import { getFieldErrors } from "../../services/getFieldErrors";
import { ReactComponent as EmailIcon } from "../../theme/icons/email-icon.svg";
import { ReactComponent as PasswordIcon } from "../../theme/icons/password-icon.svg";
import { ReactComponent as PersonIcon } from "../../theme/icons/person-icon.svg";
import { validateSamePassword } from "../../validators/validateSamePassword";

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

// registration mutation (generates useRegisterMutation hook)
/*
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
`;*/

export default function SignupForm(props: any) {
  const { register, handleSubmit, errors, watch } = useForm<SignupFormValues>();
  const history = useHistory();
  const onSubmit = (data: any) => console.log(data);

  // get combined client and server side field errors
  // const fieldErrors = getFieldErrors(registerResult.error, errors);

  // get the other password to check against
  const otherPassword = watch("password");

  return (
    <div className="signup-form">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Field
          type="text"
          name="name"
          label={"Full name"}
          leading={<PersonIcon />}
          error={errors.name}
          register={register({ required: "Name is required" })}
        />
        {errors.name && errors.name.type === "required" ? (
          <span className="error-text">Name field cannot be empty</span>
        ) : null}
        <Field
          type="email"
          name="email"
          label="Email"
          leading={<EmailIcon />}
          error={errors.email}
          register={register({
            required: "Email is required",
            validate: validateEmail,
          })}
        />
        {errors.email ? (
          <span className="error-text">Email field cannot be empty.</span>
        ) : null}
        <Field
          type="password"
          name="password"
          label="Password"
          leading={<PasswordIcon />}
          error={errors.password}
          register={register({ validate: validateMinimumLength(8) })}
        />
        {errors.password ? (
          <span className="error-text">
            Password must be more than 7 characters long.
          </span>
        ) : null}
        <Field
          type="password"
          name="repeatPassword"
          label="Repeat password"
          leading={<PasswordIcon />}
          error={errors.repeatPassword}
          register={register({
            validate: validateSamePassword(otherPassword),
          })}
        />
        {errors.repeatPassword ? (
          <span className="error-text">Passwords do not match.</span>
        ) : null}
        <input className="button" type="submit" value="Sign in" />
      </form>
    </div>
  );
}
