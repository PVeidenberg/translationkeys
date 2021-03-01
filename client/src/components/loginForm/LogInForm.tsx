import React, { useState } from "react";
import "./login-form.scss";
import classnames from "classnames";
import { useMutation, useLazyQuery, gql, useQuery } from "@apollo/client";
import Paths from "../../Paths";
import { Redirect, useHistory } from "react-router-dom";
import { Field } from "../../components/Field/Field";
import { useForm } from "react-hook-form";
import { ReactComponent as EmailIcon } from "../../theme/icons/email-icon.svg";
import { ReactComponent as PasswordIcon } from "../../theme/icons/password-icon.svg";
import { validateEmail } from "../../validators/validateEmail";
import { validateMinimumLength } from "../../validators/validateMinimumLength";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LogInForm(props: any) {
  const { register, handleSubmit, errors, watch } = useForm<LoginFormValues>();
  const history = useHistory();
  const onSubmit = (data: any) => {
    history.push(Paths.projects);
    console.log(data);
  }

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
        {errors.email ? (
          <span className="error-text">Email field cannot be empty.</span>
        ) : null}
        <Field
          type="password"
          name="password"
          label="Password"
          defaultValue=""
          leading={<PasswordIcon />}
          error={errors.password}
          register={register({ validate: validateMinimumLength(1) })}
        />
        {errors.password ? (
          <span className="error-text">
            Password must be more than 7 characters long.
          </span>
        ) : null}
        <input
          className={classnames("button")}
          type="submit"
          value="Log in"
        />
      </form>
    </div>
  );
}
