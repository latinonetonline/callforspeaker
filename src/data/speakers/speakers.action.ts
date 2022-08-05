import { Speaker } from "../../models/Speaker";
import { setLoading } from "../call-for-speakers/callforspeakers.action";
import { ActionType, DispatchObject } from "../types";
import { getUserSpeaker, searchSpeakers} from "./speakers.api";

export const loadSpeaker =
  () => async (dispatch: React.Dispatch<DispatchObject>) => {
    dispatch(setLoading(true));

    const speaker = await getUserSpeaker();
    dispatch(setSpeaker(speaker));

    dispatch(setLoading(false));
  };

  export const search =
  (search: string) => async (dispatch: React.Dispatch<DispatchObject>) => {

    const speakers = await searchSpeakers(search);

  };

  export const setSpeaker = (speaker: Speaker) =>
  ({
    type: "set-speaker",
    speaker,
  } as const);

  export const setSearch = (speakers: Speaker[]) =>
  ({
    type: "set-search",
    speakers,
  } as const);
  


  export type SpeakersActions =
  | ActionType<typeof setSearch>
  | ActionType<typeof setSpeaker>;
