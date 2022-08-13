import { Speaker } from "../../models/Speaker";
import { SpeakerDto, speakersApi } from "../../services/apiClient";

function adapterSpeaker(dto?: SpeakerDto) {
  const model: Speaker = {
    name: dto?.name ?? "",
    lastname: dto?.lastName ?? "",
    description: dto?.description ?? "",
    email: dto?.email ?? "",
    photo: dto?.image ?? "",
    twitter: dto?.twitter ?? "",
    id: dto?.speakerId,
  };

  return model;
}

export const getUserSpeaker = async (): Promise<Speaker> => {
  return await speakersApi
    .getSpeaker()
    .then((response) => response.data.result)
    .then(adapterSpeaker);
};

export const searchSpeakers = async (search: string): Promise<Speaker[]> => {
  return await speakersApi
    .searchSpeakers(search)
    .then((response) => response.data.result)
    .then((speakers) => speakers!.map(adapterSpeaker));
};
