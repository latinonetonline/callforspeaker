import { useAppContext } from "../../../data/AppContext";
import {
  insertStep,
  removeStep,
  setHasSecondSpeaker,
} from "../../../data/call-for-speakers/callforspeakers.action";
import CheckboxInput from "../../inputs/CheckboxInput";

interface SecondSpeakerCheckboxInputProps {
  error?: boolean;
  value?: boolean;
}

const SecondSpeakerCheckboxInput: React.FC<SecondSpeakerCheckboxInputProps> = ({
  error,
  value,
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
      value={value}
      onChange={(e) => handleChange(e.target.checked)}
    />
  );
};

export default SecondSpeakerCheckboxInput;
