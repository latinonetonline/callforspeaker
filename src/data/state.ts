import { callForSpeakersReducer } from './call-for-speakers/callForSpeakers.reducer';
import { combineReducers } from './combineReducers';

export const initialState: AppState = {
  callForSpeakers: {
    isLoading: false,
    hasSecondSpeaker: false,
    currentStep: 1,
    unavailableDates: [],
    user: undefined
  }
};

export const reducers = combineReducers({
    callForSpeakers: callForSpeakersReducer
});

export type AppState = ReturnType<typeof reducers>;
