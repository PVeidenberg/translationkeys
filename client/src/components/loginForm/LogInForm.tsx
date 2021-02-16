import React, { useState } from "react";
import "./login-form.css";
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
  const onSubmit = (data:any) => console.log(data);


  return (
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Field
          type="email"
          name="email"
          label="Email"
          leading={<EmailIcon />}
          error={errors.email}
          register={register({ required: "Email is required", validate: validateEmail })}
        />
        <Field
          type="password"
          name="password"
          label="Password"
          leading={<PasswordIcon />}
          error={errors.password}
          register={register({ validate: validateMinimumLength(8) })}
        />
        <input type="submit" />
      </form>
  );
}
