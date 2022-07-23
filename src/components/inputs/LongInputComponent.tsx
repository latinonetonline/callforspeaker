import React from "react";
import { useFormContext } from "react-hook-form";
import { FormInput } from "../../models/FormInput";

interface LongInputComponentProps {
  name: keyof FormInput;
  value?: string;
  error?: boolean;
  legend: string;
  inputType: string;
  placeholder: string;
  required?: boolean;
  pattern?: RegExp;
}

const LongInputComponent: React.FC<LongInputComponentProps> = (props) => {
  const {
    name,
    value,
    legend,
    inputType,
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
        <input
          defaultValue={value}
          type={inputType}
          className={`form-control`}
          placeholder={placeholder}
          {...register(name, { required: required, pattern: pattern })}
        />
      </fieldset>
    </div>
  );
};

export default LongInputComponent;
