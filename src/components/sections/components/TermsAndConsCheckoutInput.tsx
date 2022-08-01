interface TermsAndConsCheckboxInputProps {
  error?: boolean;
  value?: boolean;
  openModal: () => void;
}

const TermsAndConsCheckboxInput: React.FC<TermsAndConsCheckboxInputProps> = ({
  error,
  value,
  openModal
}) => {
  return (
    <>
      <div className="form-holder-2">
        <fieldset id="terms-and-cons-fieldset" className="checkbox-fieldset">
          <legend>Términos y condiciones</legend>
          <label htmlFor="terms-and-cons" className="unselectable">
            <input
              id="terms-and-cons"
              type="checkbox"
              className="second-speaker form-control"
              checked={value}
              onChange={() => console.log("first")}
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
