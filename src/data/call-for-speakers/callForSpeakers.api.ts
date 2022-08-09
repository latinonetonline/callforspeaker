import { ErrorMessage } from "../../models/ErrorMessage";
import { FormInput } from "../../models/FormInput";
import {
  CreateProposalRequest,
  CreateSpeakerInput,
  imagesApi,
  ProposalFullDto,
  proposalsApi,
} from "../../services/apiClient";

export const getUnavailableDates = async (): Promise<Date[]> => {
  return await proposalsApi
    .getDates()
    .then((response) => response.data.result!.dates!.map((x) => new Date(x)))
    .then((unavailableDates) =>
      unavailableDates.map((x) => {
        x.setHours(0, 0, 0, 0);
        return x;
      })
    );
};

export const uploadImage = async (blob: Blob): Promise<string | ErrorMessage> => {
  return await imagesApi
    .uploadImage(blob)
    .then((response) => response.data.result!)
    .catch((error) => {
      console.log("Error Subir Imagen:", error);
      return {
        title: "Error al subir la imagen",
        message: error.data.Error.Code,
      };
    });
};

export const createProposalApi = async (
  form: FormInput
): Promise<ProposalFullDto | ErrorMessage> => {
  const speakers: CreateSpeakerInput[] = [
    {
      name: form.speakerName,
      description: form.speakerDescription,
      email: form.speakerEmail,
      lastName: form.speakerLastname,
      twitter: form.speakerTwitter,
      image: form.speakerPhotoOriginal,
    },
  ];

  if (form.secondSpeakerName) {
    speakers.push({
      name: form.secondSpeakerName,
      description: form.secondSpeakerDescription,
      email: form.secondSpeakerEmail,
      lastName: form.secondSpeakerLastname,
      twitter: form.secondSpeakerTwitter,
      image: form.secondSpeakerPhotoOriginal,
    });
  }

  const input: CreateProposalRequest = {
    title: form.title,
    description: form.description,
    date: form.date?.toISOString(),
    audienceAnswer: form.answer1,
    useCaseAnswer: form.answer2,
    knowledgeAnswer: form.answer3,
    speakers,
  };

  return await proposalsApi
    .createProposal(input)
    .then((response) => response.data.result!)
    .catch((error) => {
      console.log("Error Cargar Charla:", error);
      return {
        title: "Error al cargar la charla",
        message: error.data.Error.Code,
      };
    });
};
