import React from "react";
import { useFormContext } from "react-hook-form";
import { FormInput } from "../../models/FormInput";

interface CheckboxInputProps {
  name: keyof FormInput;
  error?: boolean;
  legend: string;
  label: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  name,
  legend,
  label,
}) => {
  const { register } = useFormContext<FormInput>();


  return (
    <div className="form-holder-2">
      <fieldset id={name + "-fieldset"}>
        <legend>{legend}</legend>
        <label htmlFor={name} className="unselectable">
          <input
            id={name}
            type="checkbox"
            className="second-speaker form-control"
            {...register(name)}

          />
          {label}
        </label>
      </fieldset>
    </div>
  );
};

export default CheckboxInput;
