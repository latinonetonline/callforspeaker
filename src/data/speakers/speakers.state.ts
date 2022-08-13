import { Speaker } from "../../models/Speaker";

export interface SpeakerState {
  current?: Speaker;
  searchs?: Speaker[];
}
