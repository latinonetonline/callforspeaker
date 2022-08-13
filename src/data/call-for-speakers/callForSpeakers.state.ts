import { User } from "oidc-react";
import { FormInput } from "../../models/FormInput";
import { Step } from "../../models/Step";
import { ErrorMessage } from "../../models/ErrorMessage";

export interface CallForSpeakersState {
  currentStep: number;
  hasSecondSpeaker: boolean;
  isLoading: boolean;
  isAuthenticated?: boolean;
  unavailableDates: Date[];
  steps: Step[];
  form: FormInput;
  createProposalSuccess: boolean;
  error?: ErrorMessage;
}
