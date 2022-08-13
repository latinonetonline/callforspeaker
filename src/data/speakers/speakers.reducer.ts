import { SpeakersActions } from "./speakers.action";
import { SpeakerState } from "./speakers.state";

export function speakerReducer(
  state: SpeakerState,
  action: SpeakersActions
): SpeakerState {
  switch (action.type) {
    case "set-speaker":
      return { ...state, current: action.speaker };
    case "set-search":
      return { ...state, searchs: action.speakers };
  }
}
