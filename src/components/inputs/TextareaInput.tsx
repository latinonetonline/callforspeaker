import React from "react";
import { useFormContext } from "react-hook-form";
import { FormInput } from "../../models/FormInput";

interface TextareaInputProps {
  name: keyof FormInput;
  value?: string;
  error?: boolean;
  legend: string;
  placeholder: string;
  required?: boolean;
  pattern?: RegExp;
}

const TextareaInput: React.FC<TextareaInputProps> = (props) => {
  const {
    name,
    value,
    legend,
    placeholder,
    required = false,
    pattern,
    error = false,
  } = props;
  const { register } = useFormContext<FormInput>();

  return (
    <div className="form-holder-2">
      <fieldset id={name + "-fieldset"} className={error ? "error" : ""}>
        <legend>{legend}</legend>
        <textarea
          defaultValue={value}
          className={`form-control`}
          placeholder={placeholder}
          {...register(name, { required: required, pattern: pattern })}
        ></textarea>
      </fieldset>
    </div>
  );
};

export default TextareaInput;
