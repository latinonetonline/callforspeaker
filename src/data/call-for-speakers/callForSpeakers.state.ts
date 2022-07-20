import { User } from "oidc-react";
import { Step } from "../../models/Step";

export interface CallForSpeakersState {
    currentStep: number;
    hasSecondSpeaker: boolean;
    isLoading: boolean;
    isAuthenticated?: boolean;
    unavailableDates: Date[];
    steps: Step[];
  }
  