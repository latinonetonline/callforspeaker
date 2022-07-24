export type PersonalInformationSeccionFormInput = {
  speakerName: string;
  speakerLastname: string;
  speakerDescription: string;
  speakerPhoto: Blob | null;
  speakerTwitter: string;
  speakerEmail: string;
};

export type SecondPersonalInformationSeccionFormInput = {
  secondSpeakerName: string;
  secondSpeakerLastname: string;
  secondSpeakerDescription: string;
  secondSpeakerPhoto: Blob | null;
  secondSpeakerTwitter: string;
  secondSpeakerEmail: string;
};

export type PresentationSectionFormInput = {
  title: string;
  description: string;
  date: Date;
};

export type AdditionalInfoSectionFormInput = {
  answer1: string;
  answer2: string;
  answer3: string;
};

export type FormInput = PersonalInformationSeccionFormInput &
  SecondPersonalInformationSeccionFormInput &
  PresentationSectionFormInput &
  AdditionalInfoSectionFormInput;
