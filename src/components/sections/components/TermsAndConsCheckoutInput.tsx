import { useFormContext } from "react-hook-form";
import { FormInput } from "../../../models/FormInput";

interface TermsAndConsCheckboxInputProps {
  name: keyof FormInput;
  error?: boolean;
  required?: boolean;
  validate?: (value: string | boolean | Blob | Date | null) => boolean;
  openModal: () => void;
}

const TermsAndConsCheckboxInput: React.FC<TermsAndConsCheckboxInputProps> = ({
  name,
  error,
  required,
  validate,
  openModal
}) => {
  const { register } = useFormContext<FormInput>();

  return (
    <>
      <div className="form-holder-2">
        <fieldset id={name + "-fieldset"} className={error ? "error checkbox-fieldset" : "checkbox-fieldset"}>
          <legend>Términos y condiciones</legend>
          <label htmlFor="terms-and-cons" className="unselectable">
            <input
              id="terms-and-cons"
              type="checkbox"
              className="second-speaker form-control"
              {...register(name, {
                required: required,
                validate: validate,
              })}
            />
            He leído y acepto los
          </label>
        </fieldset>
        <div
          onClick={() => openModal()}
          className="terms-and-cons-clickeable"
        >
          términos y condiciones.
        </div>
      </div>
    </>
  );
};

export default TermsAndConsCheckboxInput;
