import React from "react";
import { useFormContext, useFormState } from "react-hook-form";
import { FormInput } from "../../models/FormInput";

interface ShortInputComponentProps {
  name: keyof FormInput;
  error?: boolean
  legend: string;
  inputType: string;
  placeholder: string;
  required?: boolean;
  pattern?: RegExp;
}

const ShortInputComponent: React.FC<ShortInputComponentProps> = (props) => {
  const { name, legend, inputType, placeholder, required = false, pattern, error = false } = props;

  const { register } = useFormContext<FormInput>();

  return (
    <div className="form-holder">
      <fieldset
        id={name + "-fieldset"}
        className={error ? "error" : ""}
      >
        <legend>{legend}</legend>
        <input
          type={inputType}
          className={`form-control`}
          placeholder={placeholder}
          {...register(name, { required: required, pattern: pattern })}
        />
      </fieldset>
    </div>
  );
};

export default ShortInputComponent;
