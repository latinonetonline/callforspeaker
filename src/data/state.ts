import { callForSpeakersReducer } from "./call-for-speakers/callForSpeakers.reducer";
import { combineReducers } from "./combineReducers";

export const initialState: AppState = {
  callForSpeakers: {
    isLoading: false,
    hasSecondSpeaker: false,
    currentStep: 1,
    unavailableDates: [],
    isAuthenticated: false,
    steps: [
      {
        number: "01",
        title: "Bienvenidos",
      },
      {
        number: "02",
        title: "Información Personal",
      },
      {
        number: "03",
        title: "Presentación",
      },
      {
        number: "04",
        title: "Sumemos Valor",
      },
      {
        number: "05",
        title: "Confirmación",
      },
    ],
  },
};

export const reducers = combineReducers({
  callForSpeakers: callForSpeakersReducer,
});

export type AppState = ReturnType<typeof reducers>;
