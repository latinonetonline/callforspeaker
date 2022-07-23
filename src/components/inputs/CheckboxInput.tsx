import React from "react";
import { useFormContext } from "react-hook-form";
import { FormInput } from "../../models/FormInput";

interface CheckboxInputProps {
  name: string;
  error?: boolean;
  legend: string;
  label: string;
  value?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  name,
  legend,
  label,
  value,
  onChange
}) => {

  return (
    <div className="form-holder-2">
      <fieldset id={name + "-fieldset"}>
        <legend>{legend}</legend>
        <label htmlFor={name} className="unselectable">
          <input
            id={name}
            type="checkbox"
            className="second-speaker form-control"
            checked={value}
            onChange={onChange}
          />
          {label}
        </label>
      </fieldset>
    </div>
  );
};

export default CheckboxInput;
