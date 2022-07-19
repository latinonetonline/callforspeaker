import { User } from "oidc-react";

export interface CallForSpeakersState {
    currentStep: number;
    hasSecondSpeaker: boolean;
    isLoading: boolean;
    user?: User;
    unavailableDates: Date[];
  }
  