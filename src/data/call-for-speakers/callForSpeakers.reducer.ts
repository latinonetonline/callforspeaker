import { CallForSpeakersActions } from "./callforspeakers.action";
import { CallForSpeakersState } from "./callForSpeakers.state";

export function callForSpeakersReducer(
  state: CallForSpeakersState,
  action: CallForSpeakersActions
): CallForSpeakersState {
  switch (action.type) {
    case "set-current-step":
      return { ...state, currentStep: action.step };
    case "set-loading":
      return { ...state, isLoading: action.isLoading };
    case "set-user":
        return { ...state, user: action.user };    
    case "set-unavailable-dates":
        return { ...state, unavailableDates: action.dates };   
    case "set-has-second-speaker":
      return { ...state, hasSecondSpeaker: action.hasSecondSpeaker };
  }
}
