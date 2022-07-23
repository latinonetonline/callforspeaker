export type PersonalInformationFormInput = {
  speakerName: string;
  speakerLastname: string;
  speakerDescription: string;
  speakerPhoto: string;
  speakerTwitter: string;
  speakerEmail: string;
};

export type SecondPersonalInformationFormInput = {
  secondSpeakerName: string;
  secondSpeakerLastname: string;
  secondSpeakerDescription: string;
  secondSpeakerPhoto: string;
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

export type FormInput = PersonalInformationFormInput &
  SecondPersonalInformationFormInput &
  PresentationSectionFormInput &
  AdditionalInfoSectionFormInput;
