import React from "react";

interface ShortInputComponentProps {
  fieldsetId: string;
  legend: string;
  inputId: string;
  inputType: string;
  placeholder: string;
}

const ShortInputComponent: React.FC<ShortInputComponentProps> = ({
  fieldsetId,
  legend,
  inputId,
  inputType,
  placeholder,
}) => {
  return (
    <div className="form-holder">
      <fieldset className={fieldsetId}>
        <legend>{legend}</legend>
        <input
          type={inputType}
          className={`form-control ${inputId}`}
          name={inputId}
          placeholder={placeholder}
        />
      </fieldset>
    </div>
  );
};

export default ShortInputComponent;
