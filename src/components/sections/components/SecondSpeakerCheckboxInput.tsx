import { useAppContext } from "../../../data/AppContext";
import {
  insertStep,
  removeStep,
  setHasSecondSpeaker,
} from "../../../data/call-for-speakers/callforspeakers.action";
import CheckboxInput from "../../inputs/CheckboxInput";

const SecondSpeakerCheckboxInput = () => {
  const { dispatch } = useAppContext();

  const handleChange = (value: boolean) => {
    if (value)
      dispatch(insertStep(2, { number: "2.2", title: "Segundo Speaker" }));
    else dispatch(removeStep(2));

    dispatch(setHasSecondSpeaker(value));
  };

  return (
    <CheckboxInput
      fieldsetId="second-speaker-fieldset"
      legend="Segundo Speaker"
      inputId="second-speaker"
      onChange={handleChange}
      label="Agregar un segundo speaker"
    />
  );
};

export default SecondSpeakerCheckboxInput;
