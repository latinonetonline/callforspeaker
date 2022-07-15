import React from "react";

interface TextareaInputProps {
  fieldsetId: string;
  legend: string;
  inputId: string;
  placeholder: string;
}

const TextareaInput: React.FC<TextareaInputProps> = ({
  fieldsetId,
  legend,
  inputId,
  placeholder,
}) => {
  return (
    <div className="form-holder-2">
      <fieldset className={fieldsetId}>
        <legend>{legend}</legend>
        <textarea
          name={inputId}
          className={`form-control ${inputId}`}
          placeholder={placeholder}
        ></textarea>
      </fieldset>
    </div>
  );
};

export default TextareaInput;
