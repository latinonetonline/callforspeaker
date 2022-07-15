import React from "react";

interface LongInputComponentProps {
  fieldsetId: string;
  legend: string;
  inputId: string;
  inputType: string;
  placeholder: string;
}

const LongInputComponent: React.FC<LongInputComponentProps> = ({
  fieldsetId,
  legend,
  inputId,
  inputType,
  placeholder,
}) => {
  return (
    <div className="form-holder-2">
      <fieldset className={fieldsetId}>
        <legend>{legend}</legend>
        <input
          type={inputType}
          name={inputId}
          className={`form-control ${inputId}`}
          pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
          placeholder={placeholder}
          accept=".jpg, .jpeg, .png"
        />
      </fieldset>
    </div>
  );
};

export default LongInputComponent;
