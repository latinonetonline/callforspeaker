export type PersonalInformationFormInput = {
  speakerName: string;
  speakerLastname: string;
  speakerDescription: string;
  speakerPhoto: string;
  speakerTwitter: string;
  speakerEmail: string;


};



export type FormInput = PersonalInformationFormInput & {

  secondSpeakerName: string;
  secondSpeakerLastname: string;
  secondSpeakerDescription: string;
  secondSpeakerPhoto: string;
  secondSpeakerTwitter: string;
  secondSpeakerEmail: string;

  title: string;
  description: string;
  date: Date;

  answer1: string;
  answer2: string;
  answer3: string;
};
