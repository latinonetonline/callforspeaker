import { FormInput } from "../../models/FormInput";
import { Step } from "../../models/Step";
import { ErrorMessage } from "../../models/ErrorMessage";
import { ActionType, DispatchObject } from "../types";
import {
  createProposalApi,
  getUnavailableDates,
  uploadImage,
} from "./callForSpeakers.api";
import { ProposalFullDto } from "../../generated-sources/openapi";

export const loadData =
  () => async (dispatch: React.Dispatch<DispatchObject>) => {
    dispatch(setLoading(true));

    const dates = await getUnavailableDates();
    dispatch(setUnavailableDates(dates));

    dispatch(setLoading(false));
  };

export const createProposal =
  (form: FormInput) => async (dispatch: React.Dispatch<DispatchObject>) => {
    dispatch(setLoading(true));

    if (form.speakerPhotoNew && form.speakerPhoto) {
      const result = await uploadImage(form.speakerPhoto);
      if (typeof result == "string") {
        form.speakerPhotoOriginal = result;
      }
      if ((result as ErrorMessage).title) {
        dispatch(setError(result as ErrorMessage));
      }
    }

    if (form.secondSpeakerPhotoNew && form.secondSpeakerPhoto) {
      const result = await uploadImage(form.secondSpeakerPhoto);
      if (typeof result == "string") {
        form.secondSpeakerPhotoOriginal = result;
      }
      if ((result as ErrorMessage).title) {
        dispatch(setError(result as ErrorMessage));
      }
    }

    const result = await createProposalApi(form);

    console.log("proposal", result);

    if ((result as ProposalFullDto)?.proposal?.proposalId) {
      dispatch(finishCreateProposal(true));
    }
    if ((result as ErrorMessage).title) {
      dispatch(setError(result as ErrorMessage));
    }

    dispatch(setLoading(false));
  };

export const setSpeakerImage = (imageLink: string) =>
  ({
    type: "set-loading",
    imageLink,
  } as const);

export const setLoading = (isLoading: boolean) =>
  ({
    type: "set-loading",
    isLoading,
  } as const);

export const setCurrentStep = (step: number) =>
  ({
    type: "set-current-step",
    step,
  } as const);

export const setHasSecondSpeaker = (hasSecondSpeaker: boolean) =>
  ({
    type: "set-has-second-speaker",
    hasSecondSpeaker,
  } as const);

export const setIsAuthenticated = (isAuthenticated?: boolean) =>
  ({
    type: "set-is-authenticated",
    isAuthenticated,
  } as const);

export const setUnavailableDates = (dates: Date[]) =>
  ({
    type: "set-unavailable-dates",
    dates,
  } as const);

export const insertStep = (index: number, step: Step) =>
  ({
    type: "insert-step",
    index,
    step,
  } as const);

export const removeStep = (index: number) =>
  ({
    type: "remove-step",
    index,
  } as const);

export const updateFormState = (form: Partial<FormInput>) =>
  ({
    type: "update-form-state",
    form,
  } as const);

export const finishCreateProposal = (isSuccess: boolean) =>
  ({
    type: "set-create-proposal-success",
    isSuccess,
  } as const);

export const setError = (error?: ErrorMessage) =>
  ({
    type: "set-error",
    error,
  } as const);

export const resetState = () =>
  ({
    type: "reset-state",
  } as const);

export type CallForSpeakersActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof setIsAuthenticated>
  | ActionType<typeof setUnavailableDates>
  | ActionType<typeof setHasSecondSpeaker>
  | ActionType<typeof setCurrentStep>
  | ActionType<typeof updateFormState>
  | ActionType<typeof insertStep>
  | ActionType<typeof resetState>
  | ActionType<typeof finishCreateProposal>
  | ActionType<typeof setError>
  | ActionType<typeof removeStep>;
