import React from "react";

interface CheckboxInputProps {
  fieldsetId: string;
  legend: string;
  inputId: string;
  label: string;
  onChange: (value: boolean) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  onChange,
  inputId,
  legend,
  fieldsetId,
  label,
}) => {
  return (
    <div className="form-holder-2">
      <fieldset className={fieldsetId}>
        <legend>{legend}</legend>
        <label htmlFor={inputId} className="unselectable">
          <input
            id={inputId}
            type="checkbox"
            onChange={(e) => onChange(e.target.checked)}
            name="second-speaker"
            className="second-speaker form-control"
          />
          {label}
        </label>
      </fieldset>
    </div>
  );
};

export default CheckboxInput;
