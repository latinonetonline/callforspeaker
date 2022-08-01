import { Speaker } from "../../models/Speaker";
import { setLoading } from "../call-for-speakers/callforspeakers.action";
import { ActionType, DispatchObject } from "../types";
import { getUserSpeaker } from "./speakers.api";

export const loadSpeaker =
  () => async (dispatch: React.Dispatch<DispatchObject>) => {
    dispatch(setLoading(true));

    const speaker = await getUserSpeaker();
    dispatch(setSpeaker(speaker));

    dispatch(setLoading(false));
  };

  export const setSpeaker = (speaker: Speaker) =>
  ({
    type: "set-speaker",
    speaker,
  } as const);


  export type SpeakersActions =
  | ActionType<typeof setSpeaker>;
