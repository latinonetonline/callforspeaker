import React, { useMemo, useState } from "react";
import "../inputs/InputsStyles.scss";
import ShortInputComponent from "../inputs/ShortInputComponent";
import LongInputComponent from "../inputs/LongInputComponent";
import TextareaInput from "../inputs/TextareaInput";
import ImageInputComponent from "../inputs/ImageInputComponent";
import { SecondPersonalInformationSeccionFormInput } from "../../models/FormInput";
import { useAppContext } from "../../data/AppContext";
import { FormProvider, useForm } from "react-hook-form";
import {
  setCurrentStep,
  updateFormState,
} from "../../data/call-for-speakers/callforspeakers.action";
import NextButton from "../buttons/NextButton";
import PrevButton from "../buttons/PrevButton";
import { setSearch } from "../../data/speakers/speakers.action";
import SpeakerSearch from "../inputs/SpeakerSearch";

const regExpEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

interface SecondPersonalInformationSeccionProps {}

const SecondPersonalInformationSeccion: React.FC<
  SecondPersonalInformationSeccionProps
> = () => {
  const methods = useForm<SecondPersonalInformationSeccionFormInput>();
  const [selected, setSelected] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const { state, dispatch } = useAppContext();

  const speakerSeachMemo = useMemo(
    () => (
      <SpeakerSearch
        filter={(speaker) =>
          speaker.email != state.callForSpeakers.form.speakerEmail
        }
        onSearch={(speakers) => {
          console.log(speakers);
          dispatch(setSearch, speakers);
        }}
        onChange={(speaker) => {
          console.log(speaker);
          if (speaker) {
            dispatch(
              updateFormState({
                secondSpeakerName: speaker.name,
                secondSpeakerLastname: speaker.lastname,
                secondSpeakerDescription: speaker.description,
                secondSpeakerPhotoOriginal: speaker.photo,
                secondSpeakerTwitter: speaker.twitter,
                secondSpeakerEmail: speaker.email,
              })
            );
          }

          setSelected(true);
        }}
      />
    ),
    []
  );

  const onValidSubmit = (data: SecondPersonalInformationSeccionFormInput) => {
    console.log(data);
    dispatch(updateFormState(data));
    dispatch(setCurrentStep(state.callForSpeakers.currentStep + 1));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValidSubmit)}>
        <div className="tab-content animate__animated animate__fadeIn">
          <section id="personal-information-section">
            <div className="section-header">
              <h3 className="heading">Segundo Speaker</h3>
              <p>
                Atras de toda gran charla hay un gran speaker al cual todos
                nosotros queremos conocer.
              </p>
            </div>

            {(selected || state.callForSpeakers.form.secondSpeakerEmail) ? (
              <>
                <div className="form-row">
                  <ShortInputComponent
                    name="secondSpeakerName"
                    legend="Name"
                    inputType="text"
                    placeholder="Nombre"
                    required={true}
                    error={!!errors.secondSpeakerName}
                    value={state.callForSpeakers.form.secondSpeakerName}
                  />
                  <ShortInputComponent
                    name="secondSpeakerLastname"
                    legend="Apellido"
                    inputType="text"
                    placeholder="Apellido"
                    required={true}
                    error={!!errors.secondSpeakerLastname}
                    value={state.callForSpeakers.form.secondSpeakerLastname}
                  />
                </div>

                <div className="form-row">
                  <LongInputComponent
                    name="secondSpeakerEmail"
                    legend="Email"
                    inputType="text"
                    placeholder="example@email.com"
                    required={true}
                    pattern={regExpEmail}
                    error={!!errors.secondSpeakerEmail}
                    value={state.callForSpeakers.form.secondSpeakerEmail}
                    validate={(value) =>
                      value?.toString() !==
                      state.callForSpeakers.form.speakerEmail
                    }
                  />
                </div>
                <div className="form-row">
                  <LongInputComponent
                    name="secondSpeakerTwitter"
                    legend="Twitter"
                    inputType="text"
                    placeholder="@username"
                    error={!!errors.secondSpeakerTwitter}
                    pattern={/(^|[^@\w])@(\w{1,15})\b/g}
                    value={state.callForSpeakers.form.secondSpeakerTwitter}
                  />
                </div>
                <div className="form-row">
                  <TextareaInput
                    name="secondSpeakerDescription"
                    legend="Descripción"
                    placeholder="Nos gustaria saber más de vos"
                    required={true}
                    error={!!errors.secondSpeakerDescription}
                    value={state.callForSpeakers.form.secondSpeakerDescription}
                  />
                </div>
                <div className="form-row">
                  <ImageInputComponent
                    name="secondSpeakerPhoto"
                    legend="Foto para el Flyer"
                    value={state.callForSpeakers.form.secondSpeakerPhoto}
                    required={true}
                    error={!!errors.secondSpeakerPhoto}
                  />
                </div>
              </>
            ) : (
              <>
                <h3 className="heading">Encontrá a tu compañero</h3>
                {speakerSeachMemo}
              </>
            )}
          </section>
          <div className="navigation-buttons_container button_container">
            <div className="navigation-btn_container">
              <PrevButton />
              <NextButton type="submit" />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default SecondPersonalInformationSeccion;
