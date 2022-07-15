import React from "react";

interface CheckboxInputProps {}

const CheckboxInput: React.FC<CheckboxInputProps> = () => {
  return (
    <div className="form-holder-2">
      <fieldset className="second-speaker-fieldset">
        <legend>Segundo Speaker</legend>
        <label htmlFor="second-speaker" className="unselectable">
          <input
            type="checkbox"
            name="second-speaker"
            className="second-speaker form-control"
            placeholder="@username"
          />
          Agregar un segundo speaker
        </label>
      </fieldset>
    </div>
  );
};

export default CheckboxInput;
