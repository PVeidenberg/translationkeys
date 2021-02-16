import React, { useState } from "react";
import "./field.scss";
import { UseFormMethods, FieldError } from "react-hook-form";

export interface FieldProps extends React.ComponentPropsWithoutRef<"input"> {
  isActive?: boolean;
  name: string;
  label: string;
  defaultValue?: string;
  leading?: React.ReactNode;
  error?: FieldError;
  register?: UseFormMethods["register"] | React.Ref<HTMLInputElement>;
}

export const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  function Field(
    {
      isActive,
      type,
      name,
      label,
      error,
      leading,
      register,
      className,
      onClick,
      onChange,
      onFocus,
    },
    ref
  ) {
    const [hasValue, setHasValue] = useState(false);
    const [hasFocus, setHasFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isActivated, setIsActivated] = useState(
      isActive === true ? false : true
    );

    const handleValueChange = (value: string) => {
      const hasValueNow = value.length > 0;

      // only update state if having value has changed
      if (hasValueNow !== hasValue) {
        setHasValue(hasValueNow);
      }
    };

    // toggle password button (both show and hide icons are shown on top of each other and faded in/out)

    // use password toggle for password fields when custom trailing element has not been set

    // called when trailing icon container is clicked (larger click area)

    return (
      <div className="form-row">
        <label>{label}</label>
        <input className="input" type={type} name={name} ref={register} />
      </div>
    );
  }
);
