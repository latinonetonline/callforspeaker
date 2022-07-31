import { CallForSpeakersActions } from "./callforspeakers.action";
import { CallForSpeakersState } from "./callForSpeakers.state";
import update from "immutability-helper";
import {initialState} from "../../data/state"

export function callForSpeakersReducer(
  state: CallForSpeakersState,
  action: CallForSpeakersActions
): CallForSpeakersState {
  switch (action.type) {
    case "set-current-step":
      return { ...state, currentStep: action.step };
    case "set-loading":
      return { ...state, isLoading: action.isLoading };
    case "set-is-authenticated":
      return { ...state, isAuthenticated: action.isAuthenticated };
    case "set-unavailable-dates":
      return { ...state, unavailableDates: action.dates };
    case "set-has-second-speaker":
      return { ...state, hasSecondSpeaker: action.hasSecondSpeaker };
    case "update-form-state":
      return { ...state, form: {...state.form, ...action.form }};
    case "insert-step":
      return {
        ...state,
        steps: update(state.steps, {
          $splice: [
            [action.index, 1, action.step, state.steps[action.index]],
          ],
        }),
      };
    case "remove-step":
      return {
        ...state,
        steps: update(state.steps, {
          $splice: [[action.index, 1]],
        }),
      };
    case "reset-state":
      return initialState.callForSpeakers;
  }
}
