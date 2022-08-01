import { FormInput } from "../../models/FormInput";
import { Step } from "../../models/Step";
import { ActionType, DispatchObject } from "../types";
import {
  createProposalApi,
  getUnavailableDates,
  uploadImage,
} from "./callForSpeakers.api";

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
      form.speakerPhotoOriginal = result;
    }

    if (form.secondSpeakerPhotoNew && form.secondSpeakerPhoto) {
      const result = await uploadImage(form.secondSpeakerPhoto);
      form.secondSpeakerPhotoOriginal = result;
    }

    const proposal = await createProposalApi(form);

    console.log("proposal", proposal);

    if (proposal?.proposal?.proposalId) {
      dispatch(finishCreateProposal(true));
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
  | ActionType<typeof removeStep>;
