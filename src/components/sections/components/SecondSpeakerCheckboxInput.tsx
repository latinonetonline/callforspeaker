import { useFormContext } from "react-hook-form";
import { useAppContext } from "../../../data/AppContext";
import {
  insertStep,
  removeStep,
  setHasSecondSpeaker,
} from "../../../data/call-for-speakers/callforspeakers.action";
import { FormInput } from "../../../models/FormInput";
import CheckboxInput from "../../inputs/CheckboxInput";

interface SecondSpeakerCheckboxInputProps {
  error?: boolean;
}

const SecondSpeakerCheckboxInput: React.FC<SecondSpeakerCheckboxInputProps> = ({
  error,
}) => {
  const { dispatch } = useAppContext();

  const handleChange = (value: boolean) => {
    if (value)
      dispatch(insertStep(2, { number: "2.2", title: "Segundo Speaker" }));
    else dispatch(removeStep(2));

    dispatch(setHasSecondSpeaker(value));
  };

  return (
    <CheckboxInput
      name="hasSecondSpeaker"
      legend="Segundo Speaker"
      label="Agregar un segundo speaker"
      error={error}
    />
  );
};

export default SecondSpeakerCheckboxInput;
