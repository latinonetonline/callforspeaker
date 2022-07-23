import React from "react";
import { useFormContext } from "react-hook-form";
import { FormInput } from "../../models/FormInput";

interface TextareaInputProps {
  name: keyof FormInput;
  error?: boolean
  legend: string;
  placeholder: string;
  required?: boolean;
  pattern?: RegExp;
}

const TextareaInput: React.FC<TextareaInputProps> = (props) => {

  const { name, legend, placeholder, required = false, pattern, error = false } = props;
  const { register } = useFormContext<FormInput>();


  return (
    <div className="form-holder-2">
      <fieldset
        id={name + "-fieldset"}
        className={error ? "error" : ""}
      >
        <legend>{legend}</legend>
        <textarea
          className={`form-control`}
          placeholder={placeholder}
          {...register(name, { required: required, pattern: pattern })}

        ></textarea>
      </fieldset>
    </div>
  );
};

export default TextareaInput;
