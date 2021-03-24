import React, { useEffect, useState } from "react";
import classnames from "classnames";
import "./signup-form.scss";
import { gql } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Field } from "../../components/Field/Field";
// import { useMutation, useLazyQuery, gql, useQuery } from "@apollo/client";
// import Paths from "../../Paths";
import { useRegisterMutation } from "../../schema";
import { useHistory } from "react-router-dom";
import { validateEmail } from "../../validators/validateEmail";
import { validateMinimumLength } from "../../validators/validateMinimumLength";
import { getFieldErrors } from "../../services/getFieldErrors";
import { ReactComponent as EmailIcon } from "../../theme/icons/email-icon.svg";
import { ReactComponent as PasswordIcon } from "../../theme/icons/password-icon.svg";
import { ReactComponent as PersonIcon } from "../../theme/icons/person-icon.svg";
import { validateSamePassword } from "../../validators/validateSamePassword";
import Paths from "../../Paths";

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

// registration mutation (generates useRegisterMutation hook)
gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      id
    }
  }
`;

export default function SignupForm(props: any) {
  const { register, handleSubmit, errors, watch } = useForm<SignupFormValues>();
  const history = useHistory();
  const [registerUser, registerResult] = useRegisterMutation({
    refetchQueries: ["Viewer"],
    awaitRefetchQueries: true,
  });

  /*const onSubmit = (data: any) => {
    history.push(Paths.projects);
    console.log(data);
  };*/

  // register user on submit
  const onSubmit: SubmitHandler<SignupFormValues> = async (data) => {
    console.log({ data });
    const response = await registerUser({
      variables: data,
    });
    console.log(response);
    // redirect to projects if registration is successful
    if (response.data) {
      history.push(Paths.projects);
    }
  };

  //get combined client and server side field errors
  const fieldErrors = getFieldErrors(registerResult.error, errors);

  // get the other password to check against
  const name = watch("name");
  const email = watch("email");
  const password = watch("password");
  const repeatPassword = watch("repeatPassword");

  const hasErrors =
    errors.email !== undefined ||
    email === undefined ||
    email === "" ||
    errors.name !== undefined ||
    name === undefined ||
    name === "" ||
    errors.password !== undefined ||
    password === undefined ||
    password === "" ||
    errors.repeatPassword !== undefined ||
    repeatPassword === undefined ||
    repeatPassword === "";

  // console.log(hasErrors);
  // console.log(email);
  // console.log(name);
  // console.log(password);
  // console.log(repeatPassword);
  // console.log(errors.email);
  // console.log(errors.name);
  // console.log(errors.password);
  // console.log(errors.repeatPassword);

  return (
    <div className="signup-form">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Field
          type="text"
          name="name"
          label={"Full name"}
          defaultValue=""
          leading={<PersonIcon />}
          error={errors.name}
          register={register({ required: "Name is required" })}
        />
        {errors.name ? <span className="error-text">Name field cannot be empty</span> : null}
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
        <Field
          type="password"
          name="repeatPassword"
          label="Repeat password"
          defaultValue=""
          leading={<PasswordIcon />}
          error={errors.repeatPassword}
          register={register({
            validate: validateSamePassword(password),
          })}
        />
        {errors.repeatPassword ? <span className="error-text">Passwords do not match.</span> : null}
        <input className={classnames("button")} type="submit" disabled={hasErrors} value="Sign in" />
      </form>
    </div>
  );
}
